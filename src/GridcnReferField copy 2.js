import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MdfRefer from 'ac-mdf-refer'

//类型校验
const propTypes = {
    value: PropTypes.any,
    onChange: PropTypes.func,
    className: PropTypes.string,
    field: PropTypes.string,
    index: PropTypes.number,
    message: PropTypes.string,
    data: PropTypes.array,
    required: PropTypes.bool,
    onValidate: PropTypes.func,
    isFlag: PropTypes.bool,
    validate: PropTypes.bool,
};

//默认参数值
const defaultProps = {
    field: '',
    index: '',
    message: '请输入此字段',
    data: [],
    required: false,
    isFlag: false,
    validate: false,
    className: '',
    displayname:'name',
}

class ReferField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            flag: false,
            error: false
        }
        this.valueChanged = false;
        this.modelOrg = new cb.models.ReferModel({
            cRefType: props.cRefType,
            displayname: props.displayname,
            ...props
        });
        this.config = {
            modelconfig: {
                afterValueChange: this.afterValueChange
            }
        }
    }
    // componentWillReceiveProps(nextProps) {
    //     if('value' in nextProps ){
    //         let value = nextProps.value;
    //         this.setState({
    //             value
    //         },()=>{
    //             // if(Array.isArray(value)){
    //             //     this.modelOrg.setValue(value)
    //             // }else{
    //             //     this.setValue(value)
    //             // }
    //         })
    //     }
    // } 

    // afterValueChange = (data) => {
    //     let _field = this.modelOrg._get_data("valueField"),
    //     _v = data.value[_field] || data.value
    //     // if(Array.isArray(data.value) && data.value.length === 0 && !this.props.multiple) return;//解决问题树参照根节点问题
    //     this.onChange(_v);
    // }

    render() {
        // let { value, error, flag } = this.state;
        let { className, message, required,fieldProps,onChange,value } = this.props;
        console.log(" ac-gridcn-refer-field---GridcnReferField----render",value);
        return (
            // <FieldWrap
            //     required={required}
            //     error={error}
            //     message={message}
            //     flag={flag}
            // >
            // {/* 参照固定容器 */}
            <div id="yxyweb-support-container">
                <MdfRefer
                    {...fieldProps}
                    className={`${className} triangle-element`}
                    modelName={'refer'} 
                    model={this.modelOrg} 
                    config={this.config}
                    value={value}
                    onChange={onChange}
                    />
            </div>
            // </FieldWrap>
        );
    }
}

ReferField.propTypes = propTypes;
ReferField.defaultProps = defaultProps;
export default ReferField;