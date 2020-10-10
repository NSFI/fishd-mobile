# Switch 动作面板 【交互：刘莹莹 |视觉：徐剑杰 |开发：唐志华】

Select between two status, e.g. Select On or Off.

### Rules
- Used in `List` only.
- There is no need to add extra text to describe the value of `Switch` .

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| checked    | Whether is checked by default    | Boolean       |   false  |
| disabled   | whether is disabled    | Boolean       |   false  |
| color | Background color when the switch is turned on. | String | #4dd865 |
| onChange   | The callback function that is triggered when the selected state changes. | (checked: bool): void |  -  |
| name | name of `switch`    | String   |      |
| platform |  set the special style depends on platform, Options  `android`, `ios`， default to be `ios` | String | `'ios'`|
