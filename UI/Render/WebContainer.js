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
if (typeof Core.UI.Render == 'undefined') Core.UI.Render = {};
Core.UI.Render.WebContainer = class extends Runtime.CoreStruct{
	/**
	 * Render view
	 */
	static renderView(context, container){
		var render_result = container.render;
		if (render_result == null){
			return container;
		}
		var layout_model = render_result.layout_model;
		if (layout_model == null){
			layout_model = new Core.UI.Render.LayoutModel();
		}
		var content = Core.UI.Render.RenderHelper.render(render_result.view_class, render_result.view_model);
		/* Get modules name */
		var arr = (new Runtime.Vector()).push(render_result.view_class);
		if (render_result.layout_class != ""){
			arr.push(render_result.layout_class);
		}
		arr = arr.map((class_name) => {
			return Runtime.rtl.method(class_name, "moduleDescription")();
		});
		/* Get all assets and components */
		var modules = Core.UI.Render.RenderHelper.getModules(arr, layout_model);
		var assets = modules.filter((class_name) => {
			var is_assets = Runtime.rtl.class_implements(class_name, "Core.Interfaces.AssetsInterface") || Runtime.rtl.class_implements(class_name, "Runtime.Interfaces.ModuleDescriptionInterface") || Runtime.rtl.class_implements(class_name, "Core.Interfaces.ComponentInterface");
			return is_assets;
		});
		var components = modules.filter((class_name) => {
			var is_component = Runtime.rtl.class_implements(class_name, "Core.Interfaces.ComponentInterface");
			return is_component;
		});
		/* Init layout model */
		layout_model = Core.UI.Render.RenderHelper.initRenderContainer(layout_model);
		layout_model = layout_model.copy((new Runtime.Map()).set("modules", modules).set("assets", assets).set("components", components).set("content", content));
		container = container.copy( new Runtime.Map({ "render": container.render.copy( new Runtime.Map({ "layout_model": layout_model })  ) })  );
		return container;
	}
	/**
	 * Render layout
	 */
	static renderLayout(context, container){
		if (container.render == null){
			return container;
		}
		if (container.render.layout_class == "" || container.render.layout_model == null){
			return container;
		}
		var layout_model = container.render.layout_model.copy((new Runtime.Map()).set("view", container.render.view_class).set("model", container.render.view_model));
		container = container.copy( new Runtime.Map({ "render": container.render.copy( new Runtime.Map({ "layout_model": layout_model })  ) })  );
		content = Core.UI.Render.RenderHelper.render(container.render.layout_class, container.render.layout_model);
		container = container.copy( new Runtime.Map({ "response": new Core.Http.Response((new Runtime.Map()).set("content", content)) })  );
		return container;
	}
	/**
	 * Render container
	 */
	static response(context, container){
		return (async_ctx_0) => {
			var async_jump_0 = async_ctx_0.current();
			if (async_jump_0 == "0"){
				if (container.response != null){
					return async_ctx_0.resolve(container);
				}
				if (container.render == null){
					return async_ctx_0.resolve(container);
				}
				container = this.renderView(context, container);
				container = this.renderLayout(context, container);
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
	getClassName(){return "Core.UI.Render.WebContainer";}
	static getCurrentNamespace(){return "Core.UI.Render";}
	static getCurrentClassName(){return "Core.UI.Render.WebContainer";}
	static getParentClassName(){return "Runtime.CoreStruct";}
	_init(){
		super._init();
		var names = Object.getOwnPropertyNames(this);
		this.__request = null;
		if (names.indexOf("request") == -1)Object.defineProperty(this, "request", { get: function() { return this.__request; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("request") }});
		this.__render = null;
		if (names.indexOf("render") == -1)Object.defineProperty(this, "render", { get: function() { return this.__render; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("render") }});
		this.__response = null;
		if (names.indexOf("response") == -1)Object.defineProperty(this, "response", { get: function() { return this.__response; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("response") }});
		this.__route_info = null;
		if (names.indexOf("route_info") == -1)Object.defineProperty(this, "route_info", { get: function() { return this.__route_info; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("route_info") }});
		this.__cookies = null;
		if (names.indexOf("cookies") == -1)Object.defineProperty(this, "cookies", { get: function() { return this.__cookies; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("cookies") }});
		this.__params = null;
		if (names.indexOf("params") == -1)Object.defineProperty(this, "params", { get: function() { return this.__params; }, set: function(value) { throw new Runtime.Exceptions.AssignStructValueError("params") }});
	}
	assignObject(obj){
		if (obj instanceof Core.UI.Render.WebContainer){
			this.__request = obj.__request;
			this.__render = obj.__render;
			this.__response = obj.__response;
			this.__route_info = obj.__route_info;
			this.__cookies = obj.__cookies;
			this.__params = obj.__params;
		}
		super.assignObject(obj);
	}
	assignValue(variable_name, value, sender){if(sender==undefined)sender=null;
		if (variable_name == "request")this.__request = Runtime.rtl.convert(value,"Core.Http.Request",null,"");
		else if (variable_name == "render")this.__render = Runtime.rtl.convert(value,"Core.UI.Render.RenderResult",null,"");
		else if (variable_name == "response")this.__response = Runtime.rtl.convert(value,"Core.Http.Response",null,"");
		else if (variable_name == "route_info")this.__route_info = Runtime.rtl.convert(value,"Core.UI.Annotations.RouteInfo",null,"");
		else if (variable_name == "cookies")this.__cookies = Runtime.rtl.convert(value,"Runtime.Collection",null,"Cookie");
		else if (variable_name == "params")this.__params = Runtime.rtl.convert(value,"Runtime.Map",null,"string");
		else super.assignValue(variable_name, value, sender);
	}
	takeValue(variable_name, default_value){
		if (default_value == undefined) default_value = null;
		if (variable_name == "request") return this.__request;
		else if (variable_name == "render") return this.__render;
		else if (variable_name == "response") return this.__response;
		else if (variable_name == "route_info") return this.__route_info;
		else if (variable_name == "cookies") return this.__cookies;
		else if (variable_name == "params") return this.__params;
		return super.takeValue(variable_name, default_value);
	}
	static getFieldsList(names, flag){
		if (flag==undefined)flag=0;
		if ((flag | 3)==3){
			names.push("request");
			names.push("render");
			names.push("response");
			names.push("route_info");
			names.push("cookies");
			names.push("params");
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