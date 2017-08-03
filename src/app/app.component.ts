import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import * as _ from 'lodash';
import * as $ from 'backbone';
import * as joint from 'jointjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';


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
}