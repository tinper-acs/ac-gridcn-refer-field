import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 



var Demo1 = require("./demolist/Demo1");var DemoArray = [{"example":<Demo1 />,"title":" 普通表格基本示例","code":"/**\r\n*\r\n* @title 普通表格基本示例\r\n* @description 普通表格基本示例\r\n*\r\n*/\r\nimport React, { Component } from 'react';\r\nimport data from './data';\r\nimport { Grid } from 'ac-gridcn';\r\nimport ReferField from 'ac-gridcn-refer-field/index';\r\n\r\nclass Demo1 extends Component {\r\n    constructor(props){\r\n        super(props);\r\n        this.column = [\r\n            {\r\n                title: \"员工编号\",\r\n                dataIndex: \"code\",\r\n                key: \"code\",\r\n                width: 150\r\n            },\r\n            {\r\n                title: \"物料名称\" ,\r\n                dataIndex: \"name\",\r\n                key: \"name\",\r\n                width: 200,\r\n                required: true,\r\n                validate: true,\r\n                renderType: 'refer',\r\n                component:<ReferField/>,\r\n                fieldProps:{\r\n                    cRefType: 'productcenter.pc_nomalproductref',\r\n                    referValueType:'any'\r\n                }\r\n            },\r\n            {\r\n                title: \"员工性别\",\r\n                dataIndex: \"sexEnumValue\",\r\n                key: \"sexEnumValue\",\r\n                width: 120,\r\n                \r\n            },\r\n            {\r\n                title: \"工龄\",\r\n                dataIndex: \"serviceYears\",\r\n                key: \"serviceYears\",\r\n                width: 130,\r\n                \r\n            },\r\n            {\r\n                title: \"司龄\",\r\n                dataIndex: \"serviceYearsCompany\",\r\n                key: \"serviceYearsCompany\",\r\n                width: 130,\r\n            },\r\n            {\r\n                title: \"年份\",\r\n                dataIndex: \"year\",\r\n                key: \"year\",\r\n                width: 100,\r\n            },\r\n            {\r\n                title: \"月份\",\r\n                dataIndex: \"monthEnumValue\",\r\n                key: \"monthEnumValue\",\r\n                width: 120,\r\n            },\r\n            {\r\n                title: \"补贴类别\",\r\n                dataIndex: \"allowanceTypeEnumValue\",\r\n                key: \"allowanceTypeEnumValue\",\r\n                width: 120,\r\n            },\r\n            {\r\n                title: \"补贴标准\",\r\n                dataIndex: \"allowanceStandard\",\r\n                key: \"allowanceStandard\",\r\n                width: 120,\r\n            },\r\n            {\r\n                title: \"实际补贴\",\r\n                dataIndex: \"allowanceActual\",\r\n                key: \"allowanceActual\",\r\n                width: 120,\r\n            },\r\n            {\r\n                title: \"是否超标\",\r\n                dataIndex: \"exdeedsEnumValue\",\r\n                key: \"exdeedsEnumValue\",\r\n                width: 120,\r\n            },\r\n            {\r\n                title: \"领取方式\",\r\n                dataIndex: \"pickTypeEnumValue\",\r\n                key: \"pickTypeEnumValue\",\r\n                width: 120,\r\n            },\r\n            {\r\n                title: \"备注\",\r\n                dataIndex: \"remark\",\r\n                key: \"remark\",\r\n                width: 100,\r\n            }\r\n        ];\r\n        this.state={\r\n            activePage:1,\r\n            total:100,\r\n            items:10\r\n        }\r\n    }\r\n    /**\r\n     * 跳转指定页码\r\n     *\r\n     * @param {*} pageIndex\r\n     */\r\n    freshData = (pageIndex) => {\r\n        console.log('freshData')\r\n    }\r\n\r\n    /**\r\n     * 分页  跳转指定页数和设置一页数据条数\r\n     *\r\n     * @param {*} index\r\n     * @param {*} value\r\n     */\r\n    onDataNumSelect = (index, value) => {\r\n        console.log('onDataNumSelect')\r\n    }\r\n\r\n    /**\r\n     * type为0标识为pageIndex,为1标识pageSize\r\n     *\r\n     * @param {*} value\r\n     * @param {*} type\r\n     */\r\n    onPageSelect = (value, type) => {\r\n        console.log('onPageSelect')\r\n    }\r\n    getSelectedDataFunc=()=>{\r\n        console.log('getSelectedDataFunc')\r\n    }\r\n\r\n    getAllData=()=>{\r\n        console.log(this.grid.allData)\r\n    }\r\n    \r\n    changPag=()=>{\r\n        this.setState({\r\n            activePage:2,\r\n            total:50,\r\n            items:20\r\n        })\r\n    }\r\n    \r\n    render () {\r\n        let paginationObj = {\r\n            activePage: this.state.activePage,//当前页\r\n            total: this.state.total,//总条数\r\n            items: this.state.items,\r\n            freshData: this.freshData,//刷新数据\r\n            onDataNumSelect: this.onDataNumSelect,//选择记录行\r\n            // disabled: false//分页条禁用状态\r\n        }\r\n        return (\r\n            <div className='grid-parent'>\r\n                <Grid\r\n                    ref={(el) => this.grid = el}//ref用于调用内部方法\r\n                    data={data}//数据\r\n                    columns={this.column}//定义列\r\n                    paginationObj={paginationObj}//分页数据\r\n                    getSelectedDataFunc={this.getSelectedDataFunc}//选择数据后的回调\r\n                />\r\n            </div>\r\n        )\r\n    }\r\n}\r\nexport default Demo1","desc":" 普通表格基本示例"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick=()=> {
        this.setState({ open: !this.state.open })
    }
    fCloseDrawer=()=>{
        this.setState({
            open: false
        })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;

        const header = (
            <div>
                <p className='component-title'>{ title }</p>
                <p>{ desc }</p>
                <span className='component-code' onClick={this.handleClick}> 查看源码 <i className='uf uf-arrow-right'/> </span>
            </div>
        );
        return (
            <Col md={12} id={title.trim()} className='component-demo'>
            <Panel header={header}>
                {example}
            </Panel>
           
            <Drawer className='component-drawerc' title={title} show={this.state.open} placement='right' onClose={this.fCloseDrawer}>
            <div className='component-code-copy'> JS代码 
                <Clipboard action="copy" text={code}/>
            </div>
            <pre className="pre-js">
                <code className="hljs javascript">{ code }</code>
            </pre >
            {!!scss_code ?<div className='component-code-copy copy-css'> SCSS代码 
                <Clipboard action="copy" text={scss_code}/>
            </div>:null }
                { !!scss_code ? <pre className="pre-css">
                 <code className="hljs css">{ scss_code }</code>
                 </pre> : null }
            </Drawer>
        </Col>
    )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <Row>
            {DemoArray.map((child,index) => {

                return (
            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
    )

    })}
    </Row>
    )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
