import ActionSheet from '../index.tsx';

describe('ActionSheet', () => {
  it('showActionSheetWithOptions correctly', () => {
    const BUTTONS = ['操作一', '操作二', '操作三', '删除'];
    ActionSheet.showActionSheetWithOptions(
      {
        options: BUTTONS,
        destructiveButtonIndex: BUTTONS.length - 1,
        message: '我是描述我是描述',
        maskClosable: true,
      },
      buttonIndex => {
        // console.log(BUTTONS[buttonIndex]);
        expect(BUTTONS[buttonIndex]).toBe('操作一');
      },
    );
    expect([document.querySelector('.fm-action-sheet')]).toHaveLength(1);
    document.querySelectorAll('.fm-action-sheet-button-list-item')[0].click();
  });
});
