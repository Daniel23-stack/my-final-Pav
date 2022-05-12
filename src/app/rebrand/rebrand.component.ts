import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rebrand',
  template: `
    
    <div class="container">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <button type="button" class="btn btn-lg btn-info p-2 m-2 mine" data-bs-toggle="modal" data-bs-target="#exampleModal">
              EDIT PAGE
            </button>
    <div class="container-fluid">
      <div class="row hero" style="height:900px" style.background-image="url('{{image}}')">
        <div class="col-3"></div>
        <div class="col-3">
          <img style="margin-top:10%" src="assets/img/pav.png" alt="">
          <p style="color:#0f2459; margin-top:30%; font-family: 'Arial Black'; font-size: 30px">
            {{sideHeader}}
          </p>
        </div>
        <div class="col-3 my-own" style="margin-top:20%">
          <div class="card" style="width: 20rem;">
            <div class="card-body">
              <h5 class=" mb-4 card-title pull-right" style="color:#0f2459;font-family: 'Arial Black'; font-size: 30px; Text-align: center">WHY DID WE REBRAND?</h5>
               <div [froalaView]="messege"></div>
          </div>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
      <div class="col-md-12 text-center">
        <button routerLink="/Message" type="button" class="btn btn-lg btn-info p-2 m-2">Back</button>
        <button routerLink="/Last" type="button" class="btn btn-lg btn-info p-2 m-2">Next</button>
      </div>
      <!--modal-->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Edit Page Contents</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-12">
                    <label for="formFile" class="form-label">LOGO</label>
                    <input class="form-control" type="file" (change)="onselectFile($event)"  id="formFile">
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-md-12">
                    <label for="exampleFormControlInput1" class="form-label">HEADING</label>
                    <input  [(ngModel)]="sideHeader"  type="text" class="form-control" id="exampleFormControlInput1" placeholder="heading">
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-md-12">
                    <label for="formFile" class="form-label">BACKGROUND PICTURE</label>
                    <input class="form-control" (change)="onselectFile($event)" type="file" id="formFile2">
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <label for="exampleFormControlTextarea1" class="form-label">MESSAGE</label>
                    <textarea [froalaEditor] [(froalaModel)]="messege"class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                </div>

              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
  `,
  styles: [
    `
  .hero {
   width: inherit; 
   background-size:cover;
   background-repeat: no-repeat;
   background-position: center;
    
  }
  .my-own{
    float: left;
    height: auto;
  }
  body{
    background-color: aqua;
    color: aqua;
    height: 15em;
  }
  `
  ]
})
export class RebrandComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  sideHeader= 'Driving engagement … \nlearning …\nefficiency';
  image = '/assets/img/slide1.png';
  messege = 'PAV Telecoms is very proud of what it stands for. \n We believe that our Brand, our Values and our Promise are what have made us and the people who work with use successful.\n It is therefore important that we share these with you.\n <\n \n It is equally important that we give you the tools that you need to achieve your own successes.\n\n\nPAV Connect will connect you to these tools and to\n';

  onselectFile(e: any) {
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.image=event.target.result;
      }
    }
  }
}
