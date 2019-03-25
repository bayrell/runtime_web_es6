"use strict;"
/*!
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof RuntimeUI == 'undefined') RuntimeUI = {};
if (typeof RuntimeUI.Render == 'undefined') RuntimeUI.Render = {};
RuntimeUI.Render.CoreRoute = class extends Runtime.CoreObject{
	/**
	 * Before call method
	 */
	static before(container, name){
		return (async_ctx_0) => {
			var async_jump_0 = async_ctx_0.current();
			if (async_jump_0 == "0"){
				return async_ctx_0.resolve(container);
			}
			else if (async_jump_0 == "-1"){
				return async_ctx_0.error( async_ctx_0.getError() )
			}
			else{
				return async_ctx_0.next();
			}
			return async_ctx_0.end();
		}
	}
	/**
	 * Before call method
	 */
	static after(container, name){
		return (async_ctx_0) => {
			var async_jump_0 = async_ctx_0.current();
			if (async_jump_0 == "0"){
				return async_ctx_0.resolve(container);
			}
			else if (async_jump_0 == "-1"){
				return async_ctx_0.error( async_ctx_0.getError() )
			}
			else{
				return async_ctx_0.next();
			}
			return async_ctx_0.end();
		}
	}
	/* ======================= Class Init Functions ======================= */
	getClassName(){return "RuntimeUI.Render.CoreRoute";}
	static getCurrentClassName(){return "RuntimeUI.Render.CoreRoute";}
	static getParentClassName(){return "Runtime.CoreObject";}
	_init(){
		super._init();
		if (this.__implements__ == undefined){this.__implements__ = [];}
		this.__implements__.push(RuntimeUI.Interfaces.RoutesInterface);
	}
}
RuntimeUI.Render.CoreRoute.__static_implements__ = [];
RuntimeUI.Render.CoreRoute.__static_implements__.push(RuntimeUI.Interfaces.RoutesInterface)