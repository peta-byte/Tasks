import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-lane',
    templateUrl: './lane.component.html',
    styleUrls: ['./lane.component.css']
})
export class LaneComponent implements OnInit {
    @Input() title: string;
    @Input() tasks: any[];

    ngOnInit(): void {
    }
}
