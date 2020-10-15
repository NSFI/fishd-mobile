import ActionSheet from '../index.tsx';

describe('ActionSheet', () => {
  it('showActionSheetWithOptions correctly', () => {
    const BUTTONS = ['选项1', '选项2', '选项3', '破坏性选项操作'];
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      cancelText: 'cancel',
      destructiveButtonIndex: BUTTONS.length - 1,
      message: '标题或描述',
      maskClosable: true,
      cancelButtonText: '取消',
      wrapProps: {},
      onSelect: buttonIndex => {
        expect(BUTTONS[buttonIndex]).toBe('选项1');
      }
    });
    expect([document.querySelector('.fm-action-sheet')]).toHaveLength(1);
    document.querySelectorAll('.fm-action-sheet-button-list-item')[0].click();
  });
});
