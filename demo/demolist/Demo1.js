/**
*
* @title 普通表格基本示例
* @description 普通表格基本示例
*
*/
import React, { Component } from 'react';
import data from './data';
import { EditGrid } from 'ac-gridcn';
import ReferField from '../../src/index';

class Demo1 extends Component {
    constructor(props){
        super(props);
        this.column = [
            {
                title: "员工编号",
                dataIndex: "code",
                key: "code",
                width: 150
            },
            {
                title: "员工姓名",
                dataIndex: "name",
                key: "name",
                width: 120,
                renderType:'input',
                required:true,
                validate:true,
                fieldProps:{
                    defaultValue:'姓名',
                    // autoSize: { minRows: 3, maxRows: 5 },
                    // componentClass: 'textarea' // 多行文本示例
                },
            },
            {
                title: "物料名称" ,
                dataIndex: "name",
                key: "name",
                width: 200,
                required: true,
                validate: true,
                renderType: 'refer',
                component:<ReferField/>,
                fieldProps:{
                    cRefType: 'productcenter.pc_nomalproductref',
                    referValueType:'any'
                }
            },
            {
                title: "备注",
                dataIndex: "remark",
                key: "remark",
                width: 100,
                renderType:'input',
                required:false,
            }
        ];
        this.state={
            activePage:1,
            total:100,
            items:10
        }
    }
    /**
     * 跳转指定页码
     *
     * @param {*} pageIndex
     */
    freshData = (pageIndex) => {
        console.log('freshData')
    }

    /**
     * 分页  跳转指定页数和设置一页数据条数
     *
     * @param {*} index
     * @param {*} value
     */
    onDataNumSelect = (index, value) => {
        console.log('onDataNumSelect')
    }

    /**
     * type为0标识为pageIndex,为1标识pageSize
     *
     * @param {*} value
     * @param {*} type
     */
    onPageSelect = (value, type) => {
        console.log('onPageSelect')
    }

    getAllData=()=>{
        console.log(this.grid.allData)
    }
    getSelectData=()=>{
        console.log(this.grid.selectList)
    }
    validate=()=>{
        let error = this.grid.validate();
        if(error){
            alert('数据校验失败，错误信息见控制台');
            console.log(error)
        }else{
            alert('数据校验成功')
        }
    }
    validateSelect=()=>{
        let error = this.grid.validateSelect();
        if(error){
            alert('数据校验失败，错误信息见控制台');
            console.log(error)
        }else{
            alert('数据校验成功')
        }
    }
    changPag=()=>{
        this.setState({
            activePage:2,
            total:50,
            items:20
        })
    }

    onChange = (data) => {
        console.log('data',data);
    }
    
    render () {
        let paginationObj = {
            activePage: this.state.activePage,//当前页
            total: this.state.total,//总条数
            items: this.state.items,
            freshData: this.freshData,//刷新数据
            onDataNumSelect: this.onDataNumSelect,//选择记录行
            // disabled: false//分页条禁用状态
        }
        return (
            <div className='grid-parent'>
                {/* <div style={{'marginBottom':'20px'}}>
                    <Button onClick={this.changPag} colors="primary" >改变分页</Button>
                    <Button onClick={this.getAllData} colors="primary" style={{'marginLeft':'20px'}} >获得所有数据</Button>
                    <Button onClick={this.getSelectData} colors="primary" style={{'marginLeft':'20px'}} >获得选中数据</Button>
                    <Button onClick={this.validate} colors="primary" style={{'marginLeft':'20px'}}>主动校验</Button>
                    <Button onClick={this.validateSelect} colors="primary" style={{'marginLeft':'20px'}}>主动校验选中数据</Button>
                </div> */}
                
                <EditGrid
                    ref={(el) => this.grid = el}//ref用于调用内部方法
                    data={data}//数据
                    columns={this.column}//定义列
                    paginationObj={paginationObj}//分页数据
                    excludeKeys={['id','ts','lastModified']}
                    delRow={(selectList,newData)=>{
                        console.log('删除，数据如下-----------',selectList)
                        console.log('新的数据如下-----------',newData)
                    }}
                    save={(selectList)=>{
                        console.log('保存，数据如下-----------',selectList)
                    }}
                    headerScroll={true}
                    onChange = {this.onChange}
                    title="我是标题"
                />
            </div>
        )
    }
}
export default Demo1