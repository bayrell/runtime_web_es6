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
if (typeof Core.UI == 'undefined') Core.UI = {};
if (typeof Core.UI.Events == 'undefined') Core.UI.Events = {};
if (typeof Core.UI.Events.KeyboardEvent == 'undefined') Core.UI.Events.KeyboardEvent = {};
Core.UI.Events.KeyboardEvent.KeyPressEvent = class extends Core.UI.Events.KeyboardEvent.KeyboardEvent{
	/* ======================= Class Init Functions ======================= */
	getClassName(){return "Core.UI.Events.KeyboardEvent.KeyPressEvent";}
	static getCurrentNamespace(){return "Core.UI.Events.KeyboardEvent";}
	static getCurrentClassName(){return "Core.UI.Events.KeyboardEvent.KeyPressEvent";}
	static getParentClassName(){return "Core.UI.Events.KeyboardEvent.KeyboardEvent";}
	assignObject(obj){
		if (obj instanceof Core.UI.Events.KeyboardEvent.KeyPressEvent){
		}
		super.assignObject(obj);
	}
	assignValue(variable_name, value, sender){if(sender==undefined)sender=null;
		super.assignValue(variable_name, value, sender);
	}
	takeValue(variable_name, default_value){
		if (default_value == undefined) default_value = null;
		return super.takeValue(variable_name, default_value);
	}
	static getFieldsList(names, flag){
		if (flag==undefined)flag=0;
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
Core.UI.Events.KeyboardEvent.KeyPressEvent.ES6_EVENT_NAME = "keypress";