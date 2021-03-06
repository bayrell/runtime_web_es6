"use strict;"
/*!
 *  Bayrell Core Library
 *
 *  (c) Copyright 2018-2019 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Core == 'undefined') Core = {};
if (typeof Core.Http == 'undefined') Core.Http = {};
Core.Http.ApiRequest = class extends Runtime.CoreStruct{
	/**
	 * Assing request
	 * @param Request request
	 * @param ApiRequest req
	 * @return ApiRequest
	 */
	static assignRequest(req, request){
		if (request == null){
			return ;
		}
		var data = new Runtime.Map();
		/* Get data */
		request.payload.each((key, value) => {
			data.set(key, value);
		});
		return req.copy((new Runtime.Map()).set("data", data));
	}
	/* ======================= Class Init Functions ======================= */
	getClassName(){return "Core.Http.ApiRequest";}
	static getCurrentNamespace(){return "Core.Http";}
	static getCurrentClassName(){return "Core.Http.ApiRequest";}
	static getParentClassName(){return "Runtime.CoreStruct";}
	_init(){
		super._init();
		var names = Object.getOwnPropertyNames(this);
		this.__data = null;
		if (names.indexOf("data") == -1)Object.defineProperty(this, "data", { get: function() { return this.__data; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("data") }});
	}
	assignObject(obj){
		if (obj instanceof Core.Http.ApiRequest){
			this.__data = obj.__data;
		}
		super.assignObject(obj);
	}
	assignValue(variable_name, value, sender){if(sender==undefined)sender=null;
		if (variable_name == "data")this.__data = Runtime.rtl.convert(value,"Runtime.Dict",null,"mixed");
		else super.assignValue(variable_name, value, sender);
	}
	takeValue(variable_name, default_value){
		if (default_value == undefined) default_value = null;
		if (variable_name == "data") return this.__data;
		return super.takeValue(variable_name, default_value);
	}
	static getFieldsList(names, flag){
		if (flag==undefined)flag=0;
		if ((flag | 3)==3){
			names.push("data");
		}
	}
	static getFieldInfoByName(field_name){
		return null;
	}
	static getMethodsList(names){
	}
	static getMethodInfoByName(method_name){
		return null;
	}
}