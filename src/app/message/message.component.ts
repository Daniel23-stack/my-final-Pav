import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    <div class="container">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <button type="button" class="btn btn-lg btn-info p-2 m-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
              EDIT PAGE
            </button>
    <div class="container hero" style="height:500px" style.background-image="url('{{image}}')">
      <h4 style="color:#5252d9;font-family: 'Arial Black'; font-size: 30px; Text-align: center" class="lead p-2"> {{headertext}}</h4>
      <div class="container">
        <div class="row">
          <div class="col-6">
            <p style="font-family: 'Arial'; font-size:20px">
            <div [froalaView]="messagetext"></div>
          </div>
          <div class="col-6">
            <div class="container">
              <iframe width="400" height="400" src="https://www.youtube.com/embed/IWrvCe5n4tE?list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 text-center">
        <button routerLink="/Rebrand" type="button" class="btn btn-lg btn-info p-2 m-2 my-next">Next</button>
      </div>
    </div>
            <!--modal-->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog  modal-dialog-scrollable">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit Page Contents</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="container-fluid">
                      <div class="row">
                        <div class="col-md-12">
                          <label for="exampleFormControlInput1" class="form-label">HEADING</label>
                          <input  [(ngModel)]="headertext" type="text" class="form-control" id="exampleFormControlInput1" placeholder="heading">
                        </div>
                      </div>
                      <hr>
                      <div class="col-md-12">
                        <label for="exampleFormControlInput1" class="form-label">VIDEO URL:</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Video">
                      </div>
                      <hr>
                      <div class="col-md-12">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea [froalaEditor] [(froalaModel)]="messagetext"  class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                    </div>
                    <hr>
                      <div class="row">
                        <div class="col-md-12">
                          <label for="formFile" class="form-label">BACKGROUND PICTURE</label>
                          <input class="form-control" (change)="backgroundPicture($event)" type="file" id="formFile2">
                        </div>
                      </div>

                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button (click)="onSaveChanges()" type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
  `,
  styles: [
    `
  .hero {
  
   background-size:cover;
   background-repeat: no-repeat;
   background-position: center;
    
  }
  .my-next{
    float: bottom;
  }
  body{
    color: aqua;
  }
  `
  ]
})
export class MessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 //variable declarations
  image = '/assets/img/slide1.png';
  messagetext= 'Matthew started the company selling sim cards from the boot of his car in Hillbrow.<br>\n              Today PAV is the most successful ……..\n              <br>\n              This is what PAV’s <strong>entrepreneurial revolution</strong> is all about – giving everyone the opportunity to\n              <strong>Belong and Becomes</strong>';
  headertext = 'Message from Matthew Francis';

  onselectFile($event: Event) {
    
  }

  updateheader(event: any) {
   this.headertext =(<HTMLInputElement>event.target).value
  }

  updateMessage(event: any) {
    this.messagetext = (<HTMLInputElement>event.target).value;
  }

  onSaveChanges() {
   this.messagetext;
   this.headertext;

  }

  backgroundPicture(e: any) {
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.image=event.target.result;
      }
    }
  }
}
