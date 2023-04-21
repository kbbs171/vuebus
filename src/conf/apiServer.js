import {get,post} from '../conf/newwork'


export const ApiService = {
	getDriverListMsg: (searchForm) => {
        const params = {
            pageNumber:searchForm.pageNumber,
            pageSize:searchForm.pageSize
        };
		const url = 'driver';
		return post(url, params);
	},
    sendOrderMsg:(form)=> {
        const formData = {
            content:form.content,
            msg:form.msg
        };
        const url = '';
        return post(url,formData);
    },
    sendOrdelistMsgByOrderrMsg:(params)=> {
        const paramsData = {
            pageNumber:params.pageNumber,
            pageSize:params.pageSize,
            offsetMax:params.offsetMax
        };
        const url = '';
        return post(url,paramsData);
    }
}
