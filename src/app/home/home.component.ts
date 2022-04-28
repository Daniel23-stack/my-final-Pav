import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <!--header-->
    <nav class="navbar navbar">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img [src]="image1" alt="" width="250px" height="100px">
        </a>
      </div>
    </nav>
    
    <div class="container">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <button type="button" class="btn btn-lg btn-info p-2 m-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
              EDIT PAGE
            </button>
            
            <div class="section-main">
        <img [src]="image2" alt="">
        <div class="col-md-12 text-center">
          <button routerLink="/Login" type="button" class="btn btn-lg btn-info p-2 m-2">Start the Journey</button>
        </div>
      </div>
    </div>
          <!--modal-->
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
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
                        <input class="form-control" type="file" (change)="logoUpload($event)"  id="formFile">
                      </div>
                    </div>
                    <hr>
                    <div class="row">
                      <div class="col-md-12">
                        <label for="formFile" class="form-label">HOME PICTURE</label>
                        <input class="form-control" (change)="mainPicture($event)" type="file" id="formFile2">
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
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  image1= 'assets/img/LOGO.png';
  image2= 'assets/img/main.png';
  logoUpload(e: any) {
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.image1=event.target.result;
      }
    }
  }

  mainPicture(e: any) {
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.image2=event.target.result;
      }
    }
  }
}
