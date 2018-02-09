import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CollapseView from 'react-native-collapse-view';
import { Text, View, TouchableOpacity , StyleSheet, PickerIOS, Modal } from 'react-native';

const propTypes = {
  mode: PropTypes.string,
  selectedValue: PropTypes.string,
  selectedValueIndex: PropTypes.string,
  onValueChange: PropTypes.func,
  data: PropTypes.array,
  style: PropTypes.object,
  textStyle: PropTypes.object,
  pickerItemStyle: PropTypes.object,
  collapseViewStyle: PropTypes.object,
}

const defaultProps = {
  data: null,
  mode: 'collapse',
};

class IOSPicker extends Component {
  constructor(props) {
    super(props);
    let selected = 0;
    if(this.props.data!==null) {
      selected = this.props.data[this.props.selectedValueIndex || 0];
    } else {
      selected = this.props.selectedValue || 'select one';
    }
    this.state = {
      modalVisible: false,
      selectedValue: selected,
      selected: selected,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ( this.props.data == null && nextProps.selectedValue !== this.state.selectedValue) {
      this.setState({
        selectedValue: nextProps.selectedValue,
      });
    }
  }

  pressItem = () => {
    this.setState({modalVisible:true});
  }

  valueChange = (data, index) => {
    this.setState({modalVisible:false, selectedValue: data, selected: data});
    this.props.onValueChange(data, index);
  }

  renderView = () => {
    return (
      <View style={[defaultStyles.container,this.props.style]}>
        <Text style={this.props.textStyle}>
          {this.state.selectedValue}
        </Text>
      </View>
    )
  }

  renderCollapseView = () => {
    return (
      <View style={this.props.collapseViewStyle}>
        <PickerIOS 
          selectedValue={this.state.selected}
          onValueChange={this.valueChange}>
          { 
            this.props.data && this.props.data.map((d)=>
              <PickerIOS.Item style={this.props.pickerItemStyle} key={d} label={d} value={d} />
            )
          }
          {this.props.children}
        </PickerIOS>
      </View>
    )
  }

  renderCollapsePicker() {
    return (
      <CollapseView 
        renderView={this.renderView}
        renderCollapseView={this.renderCollapseView}
      />
    )
  }

  renderModalPicker() {
    const { style, textStyle } = this.props;
    return (
    <View>
      <TouchableOpacity 
        activeOpacity={0.5}
        onPress={this.pressItem}
        style={[defaultStyles.container,style]}
      >
        <Text style={textStyle}>
          {this.state.selectedValue}
        </Text>
      </TouchableOpacity>
    </View>
    )
  }
  
  render = () => {
    const { children, data, style, textStyle, pickerStyle, pickerItemStyle, disabled, mode} = this.props;
    return (
    <View>
      <Modal transparent visible={this.state.modalVisible} animationType='fade'>
        <TouchableOpacity activeOpacity={1} onPress={() => this.setState({modalVisible:false})} style={defaultStyles.overlay}>
          <View style={defaultStyles.picker}>
            <PickerIOS 
              selectedValue={this.state.selected}
              onValueChange={this.valueChange}>
              { 
                data && data.map((d)=>
                  <PickerIOS.Item style={pickerItemStyle} key={d} label={d} value={d} />
                )
              }
              {children}
            </PickerIOS>
          </View>
        </TouchableOpacity>
      </Modal>
      {mode!=='modal' ? this.renderCollapsePicker() : this.renderModalPicker()}
    </View>
    );
  }
}

const defaultStyles = StyleSheet.create({
  container: {
    padding: 5,
    minHeight: 40,
    borderTopWidth: 0.5,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    width: null,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  picker: {
    padding: 10,
    borderTopWidth: 0.5,
    borderColor: '#aaa',
    backgroundColor: 'white'
  },
  picker2: {
    backgroundColor: 'white'
  }
});

IOSPicker.propTypes = propTypes;
IOSPicker.defaultProps = defaultProps;
export default IOSPicker;