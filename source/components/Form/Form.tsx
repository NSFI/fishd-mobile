/* eslint-disable */
import React from 'react';
import { createForm } from 'rc-form';

const addErrorExplanation = Component => {
  class NewComponent extends React.Component {
    props: any;

    render = () => {
      const { getFieldError, fieldKey, ...restProps } = this.props;
      const error = getFieldError(fieldKey);
      const errorMsg = error ? error.join('') : '';

      return (
        <>
          <Component {...restProps} />
          {errorMsg && (
            <span style={{ color: '#f5222d', lineHeight: '30px' }} className="form-error-explain">
              {errorMsg}
            </span>
          )}
        </>
      );
    };
  }

  return NewComponent;
};

const create = options => {
  return FormComponent => {
    class NewFormComponent extends React.Component {
      props: any;

      myGetFieldDecorator = (name, option: any = {}) => element => {
        // 下面这行代码主要用于validator；如果不使用validator可以删除
        option.validateFirst = option.validateFirst === undefined ? true : option.validateFirst;

        return this.props.form.getFieldDecorator(
          name,
          option,
        )(
          React.cloneElement(element, {
            fieldKey: name,
            // eslint-disable-next-line react/prop-types
            getFieldError: this.props.form.getFieldError,
          }),
        );
      };

      render = () => {
        return (
          <FormComponent
            {...this.props}
            form={{
              // eslint-disable-next-line react/prop-types
              ...this.props.form,
              getFieldDecorator: this.myGetFieldDecorator,
            }}
          />
        );
      };
    }

    return createForm(options)(NewFormComponent);
  };
};

export default {
  addErrorExplanation,
  create,
};
