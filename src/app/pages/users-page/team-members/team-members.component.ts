import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { CommonService } from '../../../commonservices/common.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-team-members',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule,CommonModule],
    templateUrl: './team-members.component.html',
    styleUrl: './team-members.component.scss'
})
export class TeamMembersComponent {

    isToggled = false;
    totalusers:any=[];
    constructor(
        public themeService: CustomizerSettingsService,
        private commonservice:CommonService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });

        commonservice.getallusers().subscribe((res:any)=>{
            this.totalusers=res;
            console.log(this.totalusers,"total users")
        },err=>console.log(err))

    }




}