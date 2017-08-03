import { Component, OnInit, ElementRef,ViewChild, AfterViewInit } from '@angular/core';
import * as jQuery from 'jquery';
import * as _ from 'lodash';
import * as $ from 'backbone';
import * as joint from 'jointjs';
import * as Diagram from 'diagram-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';
  @ViewChild('diagram1') diagram1: ElementRef;
  @ViewChild('diagram2') diagram2: ElementRef;
  @ViewChild('diagram3') diagram3: ElementRef;


  ngOnInit() {

    let graph = new joint.dia.Graph;

    let paper = new joint.dia.Paper({
      el: jQuery("#paper"),
      width: 600,
      height: 200,
      model: graph,
      gridSize: 1
    });

    let rect = new joint.shapes.basic.Rect({
      position: { x: 100, y: 30 },
      size: { width: 100, height: 30 },
      attrs: { rect: { fill: 'blue' }, text: { text: 'my box', fill: 'white' } }
    });

    let rect2 = rect.clone();
    // rect2.translate(300);

    var link = new joint.dia.Link({
      source: { id: rect.id },
      target: { id: rect2.id }
    });

     graph.addCells([rect, rect2, link]);

    

  }

  ngAfterViewInit() {


    var diagram1 = new Diagram({ canvas: { container: this.diagram1.nativeElement }});

    var diagram2 = new Diagram({
      canvas: { container: document.getElementById('diagram-2') },
      components: [ 'selectionVisuals' ]
    });

    var diagram3 = new Diagram({
      canvas: { container: document.getElementById('diagram-3') },
      modules: {
        'renderer': [ 'type', function TrafficLightRenderer() {
          this.drawShape = function(paper, data) {
            var element = paper.rect(0, 0, data.width, data.height);
            element.attr('fill', data.type || '#CCC');
            return element;
          };
          this.drawConnection = function(paper, data) {
            return paper.rect(10, 10, 100, 100);
          }
        }]
      }
    });

        diagram1.get('canvas').addShape({ id: 's1', type: 'red', x: 10, y: 20, width: 100, height: 100 });
          diagram2.get('canvas').addShape({ id: 's2', type: 'green', x: 10, y: 140, width: 100, height: 100 });
            diagram3.get('canvas').addShape({ id: 's3', type: 'yellow', x: 10, y: 260, width: 100, height: 100 });





  }
}
