define([
	'dojo/_base/declare',
	'dijit/_WidgetBase',
	'dojo/dom',
	"dojo/dom-construct",
	"dojo/_base/window",
	'dojo/on',
	'dojo/_base/lang',
	'dojox/lang/functional',
	'esri/geometry/Extent',
], function ( declare, _WidgetBase,dom,domConstruct, win,  on, lang,array,Color, functional, Extent) {
		return declare([_WidgetBase], {
        postCreate: function () {
            this.inherited(arguments);

            var img_html='<img id="wimg" src="images/ajax-loader1.gif" style="z-index:1000" width="32" height="16" alt="">';
            var n = domConstruct.create("div",{ id: "waitdiv",style: "position:absolute;left:60%;top:50%;visibility:hidden;z-index:999" }, win.body());
            dojo.place(img_html,"waitdiv");

			this.map.on('update-start', function (layer) {
				dojo.byId("waitdiv").style.visibility="visible";
			});
			this.map.on('update-end', function (layer) {
				dojo.byId("waitdiv").style.visibility="hidden";
			});
        } ,
        startup: function () {
			 this.inherited(arguments);

             // this approach could be taken to display a basic init message to the user
             /*
			 var mapPoint = this.map.geographicExtent.getCenter();
			 this.map.infoWindow.setContent('<div class="loading"></div>');
             this.map.infoWindow.show(mapPoint);
             */
        }
   });  // end return
});  // end declare function