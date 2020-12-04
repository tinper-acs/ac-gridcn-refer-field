'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _acMdfRefer = require('ac-mdf-refer');

var _acMdfRefer2 = _interopRequireDefault(_acMdfRefer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

//类型校验
var propTypes = {
    value: _propTypes2["default"].any,
    onChange: _propTypes2["default"].func,
    className: _propTypes2["default"].string,
    field: _propTypes2["default"].string,
    index: _propTypes2["default"].number,
    message: _propTypes2["default"].string,
    data: _propTypes2["default"].array,
    required: _propTypes2["default"].bool,
    onValidate: _propTypes2["default"].func,
    isFlag: _propTypes2["default"].bool,
    validate: _propTypes2["default"].bool
};

//默认参数值
var defaultProps = {
    field: '',
    index: '',
    message: '请输入此字段',
    data: [],
    required: false,
    isFlag: false,
    validate: false,
    className: '',
    displayname: 'name'
};

var ReferField = function (_Component) {
    _inherits(ReferField, _Component);

    function ReferField(props) {
        _classCallCheck(this, ReferField);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            value: props.value,
            flag: false,
            error: false
        };
        _this.valueChanged = false;
        _this.modelOrg = new cb.models.ReferModel(_extends({
            cRefType: props.cRefType,
            displayname: props.displayname
        }, props));
        _this.config = {
            modelconfig: {
                afterValueChange: _this.afterValueChange
            }
        };
        return _this;
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

    ReferField.prototype.render = function render() {
        // let { value, error, flag } = this.state;
        var _props = this.props,
            className = _props.className,
            message = _props.message,
            required = _props.required,
            fieldProps = _props.fieldProps,
            onChange = _props.onChange,
            value = _props.value;

        console.log(" ac-gridcn-refer-field---GridcnReferField----render", value);
        return (
            // <FieldWrap
            //     required={required}
            //     error={error}
            //     message={message}
            //     flag={flag}
            // >
            // {/* 参照固定容器 */}
            _react2["default"].createElement(
                'div',
                { id: 'yxyweb-support-container' },
                _react2["default"].createElement(_acMdfRefer2["default"], _extends({}, fieldProps, {
                    className: className + ' triangle-element',
                    modelName: 'refer',
                    model: this.modelOrg,
                    config: this.config,
                    value: value,
                    onChange: onChange
                }))
            )
            // </FieldWrap>

        );
    };

    return ReferField;
}(_react.Component);

ReferField.propTypes = propTypes;
ReferField.defaultProps = defaultProps;
exports["default"] = ReferField;
module.exports = exports['default'];