import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-option",
  templateUrl: "./option.component.html",
  styleUrls: ["./option.component.css"]
})
export class OptionComponent implements OnInit {
  @Input() action;

  @Output() onChoose: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
