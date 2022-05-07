import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  template: `
    <div class="container-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <button type="button" class="btn btn-lg btn-info p-2 m-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
              EDIT PAGE
            </button>
   <div class="container">
     <div class="row hero" style.background-image="url('{{image}}')">
       <div class="col-3"></div>
       <div class="col-3">
         <img style="margin-top:10%" [src]="url" alt="" width="250px" height="150px">
         <p style="color:#0f2459; margin-top:30%; font-family: 'Arial Black'; font-size: 50px">
           {{heading}}
           
         </p>
       </div>
       <div class="col-3" style="margin-top:20%">
         <div class="card" style="width: 18rem;">
           <div class="card-body">
             <h5 class=" mb-4 card-title" style="color:#0f2459;font-family: 'Arial Black'; font-size: 30px; Text-align: center">Tell us more</h5>
             <div class="">
               <label for="exampleFormControlInput1" class="form-label">Where were you born?</label>
               <input type="email" class="form-control" id="exampleFormControlInput1" placeholder>
             </div>
             <div class="mb-3">
               <label for="exampleFormControlInput1" class="form-label">Do you have children?</label>
               <input type="email" class="form-control" id="exampleFormControlInput1" placeholder>
             </div>
             <div class="mb-3">
               <label for="exampleFormControlInput1" class="form-label">What are your interests?</label>
               <input type="email" class="form-control" id="exampleFormControlInput1" placeholder>
             </div>
             <div class="mb-3">
               <label for="exampleFormControlInput1" class="form-label">What do you do on weekends?</label>
               <input type="email" class="form-control" id="exampleFormControlInput1" placeholder>
             </div>
             <button routerLink="/Message" class="btn btn-info m-5 col-md-6 text-center" >SUBMIT</button>
           </div>
         </div>
       </div>
       <div class="col-3"></div>
     </div>
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
                          <label for="exampleFormControlInput1" class="form-label">HEADING</label>
                          <input [(ngModel)]="heading" type="email" class="form-control" id="exampleFormControlInput1" placeholder="heading">
                        </div>
                      </div>
                      <hr>
                      <div class="row">
                        <div class="col-md-12">
                          <label for="formFile" class="form-label">LOGO</label>
                          <input class="form-control" (change)="logoUpdate($event)" type="file" id="formFile2">
                        </div>
                      </div>
                      <hr>
                      <div class="row">
                        <div class="col-md-12">
                          <label for="formFile" class="form-label">BACKGROUND PICTURE</label>
                          <input class="form-control" (change)="onselectFile($event)" type="file" id="formFile2">
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
  styles: [`
  .hero {
  
   background-size:cover;
   background-repeat: no-repeat;
   background-position: center;
    
  }
  `
  ]
})
export class QuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  heading = 'We would love to\n           know more about you.';
  image = '/assets/img/slide1.png';
  url = 'assets/img/pav.png';
  onselectFile(e: any) {
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.image=event.target.result;
      }
    }
  }

  onSaveChanges() {

  }

  logoUpdate(e: any) {
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }
  }
}
