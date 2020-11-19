import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 



var Demo1 = require("./demolist/Demo1");var DemoArray = [{"example":<Demo1 />,"title":" 普通表格基本示例","code":"/**\n*\n* @title 普通表格基本示例\n* @description 普通表格基本示例\n*\n*/\nimport React, { Component } from 'react';\nimport data from './data';\nimport { EditGrid } from 'ac-gridcn';\nimport ReferField from 'ac-gridcn-refer-field/index';\n\nclass Demo1 extends Component {\n    constructor(props){\n        super(props);\n        this.column = [\n            {\n                title: \"员工编号\",\n                dataIndex: \"code\",\n                key: \"code\",\n                width: 150\n            },\n            {\n                title: \"员工姓名\",\n                dataIndex: \"name\",\n                key: \"name\",\n                width: 120,\n                renderType:'input',\n                required:true,\n                validate:true,\n                fieldProps:{\n                    defaultValue:'姓名',\n                    // autoSize: { minRows: 3, maxRows: 5 },\n                    // componentClass: 'textarea' // 多行文本示例\n                },\n            },\n            {\n                title: \"物料名称\" ,\n                dataIndex: \"name\",\n                key: \"name\",\n                width: 200,\n                required: true,\n                validate: true,\n                renderType: 'refer',\n                component:<ReferField/>,\n                fieldProps:{\n                    cRefType: 'productcenter.pc_nomalproductref',\n                    referValueType:'any'\n                }\n            },\n            {\n                title: \"备注\",\n                dataIndex: \"remark\",\n                key: \"remark\",\n                width: 100,\n                renderType:'input',\n                required:false,\n            }\n        ];\n        this.state={\n            activePage:1,\n            total:100,\n            items:10\n        }\n    }\n    /**\n     * 跳转指定页码\n     *\n     * @param {*} pageIndex\n     */\n    freshData = (pageIndex) => {\n        console.log('freshData')\n    }\n\n    /**\n     * 分页  跳转指定页数和设置一页数据条数\n     *\n     * @param {*} index\n     * @param {*} value\n     */\n    onDataNumSelect = (index, value) => {\n        console.log('onDataNumSelect')\n    }\n\n    /**\n     * type为0标识为pageIndex,为1标识pageSize\n     *\n     * @param {*} value\n     * @param {*} type\n     */\n    onPageSelect = (value, type) => {\n        console.log('onPageSelect')\n    }\n\n    getAllData=()=>{\n        console.log(this.grid.allData)\n    }\n    getSelectData=()=>{\n        console.log(this.grid.selectList)\n    }\n    validate=()=>{\n        let error = this.grid.validate();\n        if(error){\n            alert('数据校验失败，错误信息见控制台');\n            console.log(error)\n        }else{\n            alert('数据校验成功')\n        }\n    }\n    validateSelect=()=>{\n        let error = this.grid.validateSelect();\n        if(error){\n            alert('数据校验失败，错误信息见控制台');\n            console.log(error)\n        }else{\n            alert('数据校验成功')\n        }\n    }\n    changPag=()=>{\n        this.setState({\n            activePage:2,\n            total:50,\n            items:20\n        })\n    }\n\n    onChange = (data) => {\n        console.log('data',data);\n    }\n    \n    render () {\n        let paginationObj = {\n            activePage: this.state.activePage,//当前页\n            total: this.state.total,//总条数\n            items: this.state.items,\n            freshData: this.freshData,//刷新数据\n            onDataNumSelect: this.onDataNumSelect,//选择记录行\n            // disabled: false//分页条禁用状态\n        }\n        return (\n            <div className='grid-parent'>\n                {/* <div style={{'marginBottom':'20px'}}>\n                    <Button onClick={this.changPag} colors=\"primary\" >改变分页</Button>\n                    <Button onClick={this.getAllData} colors=\"primary\" style={{'marginLeft':'20px'}} >获得所有数据</Button>\n                    <Button onClick={this.getSelectData} colors=\"primary\" style={{'marginLeft':'20px'}} >获得选中数据</Button>\n                    <Button onClick={this.validate} colors=\"primary\" style={{'marginLeft':'20px'}}>主动校验</Button>\n                    <Button onClick={this.validateSelect} colors=\"primary\" style={{'marginLeft':'20px'}}>主动校验选中数据</Button>\n                </div> */}\n                \n                <EditGrid\n                    ref={(el) => this.grid = el}//ref用于调用内部方法\n                    data={data}//数据\n                    columns={this.column}//定义列\n                    paginationObj={paginationObj}//分页数据\n                    excludeKeys={['id','ts','lastModified']}\n                    delRow={(selectList,newData)=>{\n                        console.log('删除，数据如下-----------',selectList)\n                        console.log('新的数据如下-----------',newData)\n                    }}\n                    save={(selectList)=>{\n                        console.log('保存，数据如下-----------',selectList)\n                    }}\n                    headerScroll={true}\n                    onChange = {this.onChange}\n                    title=\"我是标题\"\n                />\n            </div>\n        )\n    }\n}\nexport default Demo1","desc":" 普通表格基本示例"}]


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
