		var canvas;
		var stage;
		var center_x;
		var center_y;
		var soundInstance;
		var analyserNode;
		var freqByteData;
		var src = "./sound.mp3";
		var cnt = 0;
		var size =3;
		var size_count=10;
		var count_i=30;
		var count_j=22;
		var count = 0;
		var all_j=0;
		var time = 0;
		var flag = false;
		var start_flag = false;
		var obj = new Array();
		var obj_sound = new Array();
		var text;
		var text_title;
		var messageField;
		var max_peak=100;
		var peak=0;
		var peak_wave_x = 0;
		var peak_wave_y = 0; 
		var mybitmap_sound;
		var image_sound;
		var file_sound = "icon.png"
		var context;

		function init(){
			canvas = document.getElementById("mycanvas");
			stage = new createjs.Stage(document.getElementById("mycanvas"));
			center_x = stage.canvas.width/2;
			center_y = 0;

			font = 22 + "px "+"Cantarell";;
			text_field_1 = new createjs.Text("Please start music by click on stage",font, "#515151");
			text_field_1.textBaseline = "alphabetic";
			text_field_1.regX = text_field_1.getMeasuredWidth()/2;
			text_field_1.x = center_x;
			text_field_1.y = 50;
			stage.addChild(text_field_1);

   			var queue = new createjs.LoadQueue(true);
    		queue.installPlugin(createjs.Sound);
   			var manifest = [{id:"sound",src:"./sound.mp3"},];
    		queue.loadManifest(manifest,true);  
    		queue.addEventListener('fileload',handleLoad);	

			var loader_sound = new createjs.LoadQueue(false);
			loader_sound.addEventListener("fileload",draw_sound);
			loader_sound.loadFile(file_sound);
			mybitmap_sound = new createjs.Bitmap(file_sound);
			function draw_sound(){
				image_sound = mybitmap_sound.image;
			}
			for(var i=count_i;i>=1;i--){
				j=count_j;
				all_j = count_j * 10-1;	
				obj_sound[i] = new Array();
				var shape = new createjs.Shape();
				shape.graphics.beginStroke("#ffffff");
				shape.graphics.beginFill("#ff1493");
				shape.graphics.setStrokeStyle(0.25);
				shape.graphics.moveTo(size*Math.cos((360/count_j)*j*Math.PI/180),size*Math.sin((360/count_j)*j*Math.PI/180));
					for(var j=count_j-1;j>=0;j--){
						if(j == 10){
							all_j -= 2;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+1*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+1*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+2*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+2*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;						
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+3*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+3*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+4*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+4*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+5*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+5*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+6*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+6*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+7*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+7*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+8*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+8*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+9*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+9*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(0.8*size*Math.cos((360/count_j)*j*Math.PI/180),0.8*size*Math.sin((360/count_j)*j*Math.PI/180));
						}
						else if(j == 9){
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+1*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+1*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+2*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+2*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+3*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+3*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+4*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+4*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+5*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+5*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+6*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+6*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+7*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+7*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+8*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+8*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+9*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+9*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(1*size*Math.cos((360/count_j)*j*Math.PI/180),1*size*Math.sin((360/count_j)*j*Math.PI/180));
						}
						else if(j == 8){
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+1*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+1*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+2*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+2*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+3*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+3*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+4*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+4*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+5*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+5*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+6*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+6*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+7*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+7*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+8*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+8*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+9*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+9*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(1.2*size*Math.cos((360/count_j)*j*Math.PI/180),1.2*size*Math.sin((360/count_j)*j*Math.PI/180));
						}
						else if(j == 7){
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+1*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+1*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+2*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+2*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+3*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+3*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+4*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+4*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+5*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+5*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+6*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+6*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+7*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+7*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+8*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+8*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+9*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+9*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(1.1*size*Math.cos((360/count_j)*j*Math.PI/180),1.1*size*Math.sin((360/count_j)*j*Math.PI/180));
						}
						else if(j == 6){
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+1*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+1*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+2*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+2*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+3*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+3*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+4*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+4*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+5*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+5*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+6*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+6*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+7*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+7*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+8*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+8*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+9*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+9*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(size*Math.cos((360/count_j)*j*Math.PI/180),size*Math.sin((360/count_j)*j*Math.PI/180));
							}
						else{
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+1*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+1*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+2*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+2*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+3*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+3*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+4*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+4*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+5*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+5*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+6*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+6*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+7*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+7*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+8*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+8*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+9*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+9*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos((360/count_j)*j*Math.PI/180)+size*Math.cos((360/count_j)*j*Math.PI/180),peak_wave_y*Math.sin((360/count_j)*j*Math.PI/180)+size*Math.sin((360/count_j)*j*Math.PI/180));
								
						}
					}
					shape.graphics.endFill();
					shape.x = stage.canvas.width/2;
					shape.y = 300;

					if(i == count_i){
						tween = new createjs.Tween.get(shape,{loop:false})
			 			.to({scaleX:13*(i/10),scaleY:13*(i/10),rotation:(100*i)%360},5000+i*200, createjs.Ease.quintOut)
		 				.wait(1000);
		 				//tween.call(onMusicStart);
					}
					else{

						tween = new createjs.Tween.get(shape,{loop:false})
		 				.to({scaleX:13*(i/10),scaleY:13*(i/10),rotation:(100*i)%360},5000+i*200, createjs.Ease.quintOut)
		 				.wait(1000);				
					}
					

					shape.alpha = 0.18; 
					stage.addChild(shape);
					stage.update();
					obj[i] = shape;
				}
			stage.update();
			createjs.Ticker.setFPS(75);
			createjs.Ticker.addEventListener("tick",act);

			console.log("music 1");	

			function handleLoad(evt) {
				console.log("music");
				context = createjs.Sound.activePlugin.context;
			    analyserNode = context.createAnalyser();
			    analyserNode.fftSize = 32;
			    analyserNode.smoothingTimeConstant = 0.85;
			    analyserNode.connect(context.destination);
			    var dynamicsNode = createjs.Sound.activePlugin.dynamicsCompressorNode;
			    dynamicsNode.disconnect();
			    dynamicsNode.connect(analyserNode);
			    freqByteData = new Uint8Array(analyserNode.frequencyBinCount);
	            if (createjs.Touch.enable(stage)) {
	            }
				else {
	            }

	            stage.update();
	            stage.addEventListener("stagemousedown", startPlayback);
	        }
		}
		var resumeAudioContext = function() {
			try {
				if (createjs.WebAudioPlugin.context && createjs.WebAudioPlugin.context.state === "suspended") {
					createjs.WebAudioPlugin.context.resume();
					window.removeEventListener("click", resumeAudioContext);
				}
			} catch (e) {
				console.error("There was an error while trying to resume the SoundJS Web Audio context...");
				console.error(e);
			}
		};
		window.addEventListener("click", resumeAudioContext);
        function startPlayback(evt) {
            stage.removeEventListener("stagemousedown", startPlayback);
            stage.removeChild(mybitmap_sound);
            if(soundInstance) {return;}
            stage.removeChild(messageField);
		    soundInstance = createjs.Sound.play("sound",{loop:-1});
		    soundInstance.volume = 0.5;
		    stage.update();

			onComplete();

		}
		function onComplete(){
			start_flag = true;
		}
		function act(evt){
			stage.update();

        	if((start_flag == true)&&(time % 4 == 0)){
				count++;
        		analyserNode.getByteFrequencyData(freqByteData);
        		peak = 0;
		        for(var k = 0; k < freqByteData.length; k++) peak += freqByteData[k];
        		//console.log(freqByteData.length);		        
        		if(peak > max_peak){
        			max_peak = peak;
        		}
		        console.log(peak);
		        if(peak <=max_peak/6){
		        	peak = 0;
		        }
		        else if(peak <= 2*max_peak/6){
		        	peak = 0.3;
		        }
		        else if(peak <= 3*max_peak/6){
		        	peak = 0.7;
		        }
		        else if(peak <= 5.1*max_peak/6){
		        	peak = 1.3;
		        }
		        else if(peak <= 5.4*max_peak/6){
		        	peak = 2.4;
		        }
		        else{
		        	peak = 3.0;
		        }

				for(var i=count_i;i>=1;i--){
        			if(count >=(count_j*10-1)){
        				count = 0;
        			}
        			obj_sound[i][count] = peak;

					j=count_j;
					all_j = count_j * 10-1;	
					obj[i].graphics.clear();
					obj[i].graphics.beginStroke("#ffffff");
					obj[i].graphics.beginFill("#ff1493");
					obj[i].graphics.setStrokeStyle(0.25);
					obj[i].graphics.moveTo(size*Math.cos((360/count_j)*j*Math.PI/180),size*Math.sin((360/count_j)*j*Math.PI/180));
					for(var j=count_j-1;j>=0;j--){
						if(j == 10){
							all_j -= 2;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+1*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+1*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+2*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+2*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}						
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+3*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+3*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+4*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+4*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+5*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+5*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+6*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+6*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+7*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+7*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+8*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+8*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+9*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+9*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}	
							obj[i].graphics.lineTo(0.8*size*Math.cos((360/count_j)*j*Math.PI/180),0.8*size*Math.sin((360/count_j)*j*Math.PI/180));
						}
						else if(j == 9){
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+1*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+1*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+2*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+2*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+3*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+3*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+4*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+4*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+5*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+5*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+6*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+6*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+7*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+7*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+8*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+8*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+9*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+9*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(1*size*Math.cos((360/count_j)*j*Math.PI/180),1*size*Math.sin((360/count_j)*j*Math.PI/180));
						}
						else if(j == 8){
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+1*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+1*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+2*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+2*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+3*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+3*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+4*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+4*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+5*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+5*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+6*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+6*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+7*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+7*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+8*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+8*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
								if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+9*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+9*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}	
							obj[i].graphics.lineTo(1.2*size*Math.cos((360/count_j)*j*Math.PI/180),1.2*size*Math.sin((360/count_j)*j*Math.PI/180));
						}
						else if(j == 7){
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+1*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+1*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+2*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+2*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+3*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+3*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+4*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+4*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+5*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+5*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
								if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+6*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+6*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];	
								if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+7*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+7*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
								if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+8*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+8*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+9*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+9*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(1.1*size*Math.cos((360/count_j)*j*Math.PI/180),1.1*size*Math.sin((360/count_j)*j*Math.PI/180));
						}
						else if(j == 6){
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}	
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+1*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+1*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;	
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+2*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+2*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+3*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+3*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+4*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+4*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+5*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+5*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+6*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+6*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
								if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+7*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+7*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
								if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+8*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+8*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+9*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+9*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}	
							obj[i].graphics.lineTo(size*Math.cos((360/count_j)*j*Math.PI/180),size*Math.sin((360/count_j)*j*Math.PI/180));
							}
						else{
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+1*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+1*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+2*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+2*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+3*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+3*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+4*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+4*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+5*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+5*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+6*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+6*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+7*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+7*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+8*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+8*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+9*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+9*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos((360/count_j)*j*Math.PI/180)+size*Math.cos((360/count_j)*j*Math.PI/180),peak_wave*Math.sin((360/count_j)*j*Math.PI/180)+size*Math.sin((360/count_j)*j*Math.PI/180));
								
						}
					}
					obj[i].graphics.endFill();
					obj[i].y = 300
				}
			}
			time++;
		}