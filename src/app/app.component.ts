import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloNetFlix';

  public CreateButton() {
    console.log("create Button Netflix");
  }
  public deleteButton() {
    console.log("delete Button NetFlix");
  }
  public DownloadButton() {
    console.log("download Button NetFlix");
  }
  public UpdateButton() {
    console.log("update Button NetFlix");
  }
  public TimepassButton() {
    console.log("Timepass Button NetFlix");
  }
  public PassTimeButton() {
    console.log("PassTime Button NetFix");
  }
  public SameButton1() {
    console.log("Same Button1 NetFlix");
  }
  public SameButton2() {
    console.log("Same Button2 NetFlix");
  }
}
