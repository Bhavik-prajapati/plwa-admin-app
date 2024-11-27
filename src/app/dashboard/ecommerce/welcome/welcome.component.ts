import { Component, inject, Inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { CommonService } from '../../../commonservices/common.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsComponent } from '../../../forms/forms.component';

@Component({
    selector: 'app-welcome',
    standalone: true,
    imports: [HttpClientModule,RouterLink, MatCardModule, MatDividerModule,CommonModule,FormsComponent],
    templateUrl: './welcome.component.html',
    styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
    totalblogscount:number=0;
    totaluserscount:number=0;
    isToggled = false;
    constructor(
        public themeService: CustomizerSettingsService,
        private commonservice:CommonService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });

        commonservice.getallblogs().subscribe((res:any)=>{
            console.log(res.length)
            this.totalblogscount=res.length;
        },err=>console.log(err))

        commonservice.getallusers().subscribe((res:any)=>{
            this.totaluserscount=res.length;
        },err=>console.log(err))
    }
}