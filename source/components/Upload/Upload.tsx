import * as React from 'react';
import classnames from 'classnames';
import Icon from '../Icon';
import LoadMore from '../LoadMore';
import ImageView from '../ImageView';

import { isPromise, addUnit } from '../../utils';
import { readFile, isOversize, toArray } from './utils';

export interface FileItem {
  id: string;
  url: string;
  name: string;
  status?: 'uploading' | 'failed' | 'done';
  message?: string;
  content?: string;
}

export interface UploadProps {
  fileList: any[]; // 图片数组
  prefixCls?: string;
  className?: string;
  maxCount?: number | string; // 最大图片数量
  maxSize?: number | string; // 最大图片尺寸
  multiple?: boolean; // 是否支持批量选择
  disabled?: boolean; // 是否禁用
  deletable?: boolean; // 是否支持删除图片
  previewSize?: number | string; // 显示图片尺寸
  previewImage?: boolean;
  previewFullImage?: boolean; // 是否支持图片预览
  previewOptions?: any; // 图片预览额外参数
  showUpload?: boolean; // 是否显示上传按钮
  capture?: string; // 图片选取模式 可选capture
  accept?: string;
  imageFit?: string; // 图片展示模式
  resultType?: string; // result-type字段表示文件读取结果的类型，上传大文件时，建议使用 file 类型，避免卡顿。
  onBeforeRead?: Function;
  onAfterRead?: Function;
  onDelete?: Function;
  onImageClick?: Function;
  onOversize?: Function;
  onChange?: Function;
}

class Upload extends React.Component<UploadProps, any> {
  static defaultProps: UploadProps = {
    prefixCls: 'fm-upload',
    fileList: [],
    deletable: true,
    previewImage: true,
    previewFullImage: true,
    showUpload: true,
    imageFit: 'cover',
    resultType: 'dataUrl',
    maxSize: Number.MAX_VALUE,
    maxCount: Number.MAX_VALUE,
    accept: 'image/*',
  };

  inputRef: any;

  getDetail = (index = this.props.fileList.length) => {
    return {
      index,
    };
  };

  onChange = event => {
    let { files } = event.target;

    if (this.props.disabled || !files.length) {
      return;
    }

    files = files.length === 1 ? files[0] : [].slice.call(files);

    if (this.props.onBeforeRead) {
      const response = this.props.onBeforeRead(files);

      if (!response) {
        this.resetInput();
        return;
      }
      if (isPromise(response)) {
        response
          .then(data => {
            if (data) {
              this.readFile(data);
            } else {
              this.readFile(files);
            }
          })
          .catch(this.resetInput);
        return;
      }
    }

    this.readFile(files);
  };

  readFile = files => {
    const { maxCount, maxSize, fileList, resultType } = this.props;
    const oversize = isOversize(files, maxSize as any);

    if (Array.isArray(files)) {
      const maxRemainCount = (maxCount as number) - fileList.length;

      if (files.length > maxRemainCount) {
        files = files.slice(0, maxRemainCount);
      }

      Promise.all(files.map(file => readFile(file, resultType as any))).then((contents: any) => {
        const newFileList = files.map((file, index) => {
          const result = { file, status: '', message: '', content: '' };

          if (contents[index]) {
            result.content = contents[index];
          }

          return result;
        });

        this.onAfterRead(newFileList, oversize);
      });
    } else {
      readFile(files, resultType as any).then((content: any) => {
        const result = { file: files, status: '', message: '', content: '' };

        if (content) {
          result.content = content;
        }

        this.onAfterRead(result, oversize);
      });
    }
  };

  onAfterRead = (files, oversize) => {
    this.resetInput();
    const { maxSize, onOversize, onChange, onAfterRead, fileList } = this.props;
    let validFiles = files;

    if (oversize) {
      let oversizeFiles = files;
      if (Array.isArray(files)) {
        oversizeFiles = [];
        validFiles = [];
        files.forEach(item => {
          if (item.file) {
            if (item.file.size > (maxSize as any)) {
              oversizeFiles.push(item);
            } else {
              validFiles.push(item);
            }
          }
        });
      } else {
        validFiles = null;
      }
      if (onOversize) {
        onOversize(oversizeFiles, this.getDetail());
      }
    }

    const isValidFiles = Array.isArray(validFiles) ? Boolean(validFiles.length) : Boolean(validFiles);

    if (isValidFiles) {
      if (onChange) {
        onChange([...fileList, ...toArray(validFiles)]);
      }

      if (onAfterRead) {
        onAfterRead(validFiles, this.getDetail());
      }
    }
  };

  resetInput = () => {
    if (this.inputRef) {
      this.inputRef.value = '';
    }
  };

  chooseFile() {
    const { disabled } = this.props;
    if (disabled) {
      return;
    }
    /* istanbul ignore else */
    if (this.inputRef) {
      this.inputRef.click();
    }
  }

  handleImageClick = (file, index) => {
    const { fileList, onImageClick, previewFullImage, previewOptions = {} } = this.props;
    if (!['uploading', 'failed'].includes(file.status) && previewFullImage) {
      ImageView.preview({
        ...previewOptions,
        images: fileList
          .filter(v => !['uploading', 'failed'].includes(v.status))
          .map(v => ({ src: v.url || v.content })),
        defaultIndex: index,
      });
    }

    if (onImageClick) {
      onImageClick(file, index);
    }
  };

  handleDelete = (file, index, e: any) => {
    e.stopPropagation();
    e.preventDefault();
    const { onDelete } = this.props;
    if (onDelete) {
      onDelete(file, index);
    }
  };

  render() {
    const {
      className,
      prefixCls,
      multiple,
      fileList,
      maxCount,
      deletable,
      disabled,
      previewSize,
      showUpload,
      capture,
      imageFit,
      accept,
      previewImage,
    } = this.props;

    const wrapCls = classnames(prefixCls, className, {});

    const previewStyle = {
      width: addUnit(previewSize),
      height: addUnit(previewSize),
    };

    return (
      <div className={wrapCls}>
        <div className={`${prefixCls}__wrapper`}>
          {previewImage &&
            fileList.map((file, index: number) => {
              return (
                <div
                  className={`${prefixCls}__preview`}
                  key={`file_${index}`}
                  onClick={this.handleImageClick.bind(this, file, index)}
                >
                  <div className={`${prefixCls}__image`} style={previewStyle}>
                    <img src={file.url || file.content} style={{ objectFit: imageFit as any }} />
                  </div>
                  {['uploading', 'failed'].includes(file.status) ? (
                    <div className={`${prefixCls}__mask`}>
                      {file.status === 'uploading' && <LoadMore color="#fff"></LoadMore>}
                      {file.status === 'failed' && <Icon type="error-o" color="#fff" fontSize={30}></Icon>}
                      <div className={`${prefixCls}__mask-message`}>{file.message}</div>
                    </div>
                  ) : null}
                  {deletable && !disabled && (
                    <div className={`${prefixCls}__delete`} onClick={this.handleDelete.bind(this, file, index)}>
                      <Icon type="cross" color="#fff" fontSize={10}></Icon>
                    </div>
                  )}
                </div>
              );
            })}

          {fileList.length < (maxCount as number) && showUpload ? (
            <div
              className={classnames(`${prefixCls}__upload`, disabled ? `${prefixCls}__disabled` : '')}
              style={previewStyle}
            >
              <Icon type="add" color="#D8D8D8" fontSize={30}></Icon>
              <input
                className={`${prefixCls}__input`}
                ref={ref => {
                  this.inputRef = ref;
                }}
                disabled={disabled}
                multiple={multiple}
                capture={capture}
                type="file"
                accept={accept}
                onChange={this.onChange}
              />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Upload;
