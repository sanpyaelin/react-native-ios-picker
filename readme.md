# React Native IOS Picker
ios picker for react native .

<p>
<img src="https://raw.githubusercontent.com/sanpyaelin/react-native-ios-picker/master/images/modal.gif" width="200"> 
<img src="https://raw.githubusercontent.com/sanpyaelin/react-native-ios-picker/master/images/collapse.gif" width="200"> 
</p>

## Install package
```bash
$ npm i react-native-ios-picker
```

## Usage

Import the component:
```js
import IOSPicker from 'react-native-ios-picker';
```

data type is array
```js
const data = ['a','b','c','d','e','f']
<IOSPicker 
  data={data}
  onValueChange={(d, i)=> this.change(d, i)}/>
```

data type is object
```js
const data = [{name: 'SanPyaeLin', code: '22'},{name: 'Jhon', code: '1'},{name: 'Marry', code: '2'}]
<IOSPicker 
  data={data}
  selectedValue={this.state.selectedValue}
  onValueChange={(d, i)=> this.change(d, i)}>
  { 
    Country.map((item, index)=>
      <Picker.Item key={index} label={item.name} value={item.code} />
    )
  }
</IOSPicker>
```

##Example

Check full example in the [example](https://github.com/sanpyaelin/react-native-ios-picker/blob/master/example/index.js) folder.

## Props

- [`data`](readme.md#data)
- [`mode`](readme.md#mode)
- [`onValueChange`](readme.md#onvaluechange)
- [`selectedValue`](readme.md#selectedvalue)
- [`style`](readme.md#style)
- [`textStyle`](readme.md#textStyle)
- [`pickerItemStyle`](readme.md#pickerItemStyle)
- [`collapseViewStyle`](readme.md#collapseViewStyle)
---

## Reference

### `data`

An array of sections passed to the render methods

| Type     | Required |
| -------- | -------- |
| array | No       |

---

### `mode`

Specifies how to display the selection items when the user taps on the picker:

* 'modal': Show a modal dialog
* 'collapse': Shows a collapse view. This is the default.

| Type                       | Required |
| -------------------------- | -------- |
| enum('modal', 'collapse') | No       |

---

### `onValueChange`

Callback for when an item is selected. This is called with the following parameters:

* `itemValue`: the `value` prop of the item that was selected
* `itemPosition`: the index of the selected item in this picker

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### `selectedValue`

Value matching value of one of the items. Can be a string .

| Type | Required |
| ---- | -------- |
| string  | No       |

---

### `style`

| Type            | Required |
| --------------- | -------- |
| pickerStyleType | No       |

---

### `textStyle`

| Type            | Required |
| --------------- | -------- |
| textStyleType | No       |

---

### `pickerItemStyle`

| Type            | Required |
| --------------- | -------- |
| pickerItemStyleType | No       |

---

### `collapseViewStyle`

| Type            | Required |
| --------------- | -------- |
| collapseViewStyleType | No       |

---


## License

[MIT License](http://opensource.org/licenses/mit-license.html). © 2018 San Pyae Lin