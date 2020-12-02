/**
 * Text (文本输入框)
 */

//React导入
import React, { Component } from 'react';
//类型校验
import PropTypes from 'prop-types';
//验证组件 https://www.npmjs.com/package/async-validator
import schema from 'async-validator';

import MdfRefer from 'ac-mdf-refer'

import FieldWrap from './FieldWrap'



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
    /**
     * Creates an instance of ReferField.
     * @param {*} props
     * @memberof ReferField
     */
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
        this.modelOrg.on('beforeBrowse',()=>{
            if(this.props.value){
                this.modelOrg.setValue(this.props.value.id?this.props.value.id:this.props.value);
            }else{
                this.modelOrg.setValue('')
            }
            if(cb.custom){
                cb.custom.referFieldValueKeys = this.props.value||[];
            }else{
                cb.custom = {
                    referFieldValueKeys:this.props.value||[]
                }
            }
            setTimeout(()=>{
                document.querySelector('.referModal .refer-footer-container .refer-footer-btns-container .refer-modal-footer-cancle-btn').onclick=this.onCancel
                document.querySelector('.referModal .refer-modal-header .anticon.anticon-close').onclick=this.onCancel
            },500)
        })
    }
    onCancel=()=>{
        if(!this.valueChanged){
            this.modelOrg.setValue(this.props.text);
        }
    }
    /**
     *  参数发生变化回调
     *
     * @param {object} nextProps 即将更新Props
     * @param {object} nextState 即将更新State
     * @memberof NumberField
     */
    componentWillReceiveProps(nextProps) {
        if (nextProps.validate == true) {
            this.validate();
        }
        if('value' in nextProps ){
            let value = nextProps.value;
            this.setState({
                value
            },()=>{
                if(Array.isArray(value)){
                    this.modelOrg.setValue(value)
                }else{
                    this.setValue(value)
                }
            })
        }
    }

    setValue=(value)=>{
        if(typeof value == 'string' && value&&value.indexOf(',')!=-1){
            value = value.split(',')
        }
        //TODO 值临时从cb中取
        if(cb.custom){
            cb.custom.referFieldValueKeys = value||[];
        }else{
            cb.custom = {
                referFieldValueKeys:value||[]
            }
        }
    }

    componentDidMount(){
        this.changeed = false;
        this.setValue(this.props.value,true)
        this.modelOrg.setValue(this.props.text);
    }
    componentDidUpdate(){
        this.changeed = true;
    }

    afterValueChange = (data) => {
        if(this.changeed){
            this.valueChanged = true;
        }
        if(Array.isArray(data.value) && data.value.length === 0 && !this.props.multiple) return;//解决问题树参照根节点问题
        this.handlerChange(data.value)
    }


    /**
     * 有输入值改变的回调
     *
     * @param {string} value
     */
    handlerChange = (value) => {
        let { onChange, field, index, status } = this.props;
        //处理是否有修改状态改变、状态同步之后校验输入是否正确
        this.setState({ value, flag: status == 'edit'&&this.changeed }, () => {
            this.validate();
        });
        //回调外部函数
        onChange && onChange(field, value, index);
    }
    /**
     * 校验方法
     *
     */
    validate = () => {
        let { required, field, index, onValidate,message,pattern,referValueType='string' } = this.props;
        let { value } = this.state;
        let type = 'string';
        if(value){
            if(typeof value =='object')type='object';
            if(Array.isArray(value)){
                type='array';
                if(value.length==0){
                    type = 'string';
                    value = ''
                }
            }
        }
        //设置校验规则
        let descriptor = {
            [field]: { type, required }
        }
        if(pattern){
            descriptor[field].push({
                pattern:pattern,message:message
            })
        }
        let validator = new schema(descriptor);
        validator.validate({ [field]: value }, (errors, fields) => {
            if (errors) {
                this.setState({
                    error: true
                });
            } else {
                this.setState({
                    error: false
                });
            }
            onValidate && onValidate(field, fields, index);
        });
    }
    render() {
        let { value, error, flag } = this.state;
        let { className, message, required,fieldProps } = this.props;

        return (
            <FieldWrap
                required={required}
                error={error}
                message={message}
                flag={flag}
            >
            {/* 参照固定容器 */}
            <div id="yxyweb-support-container">
                <MdfRefer
                    {...fieldProps}
                    className={`${className} triangle-element`}
                    modelName={'refer'} 
                    model={this.modelOrg} 
                    config={this.config}
                    value={value}
                    />
            </div>
            </FieldWrap>
        );
    }
}

ReferField.propTypes = propTypes;
ReferField.defaultProps = defaultProps;
export default ReferField;