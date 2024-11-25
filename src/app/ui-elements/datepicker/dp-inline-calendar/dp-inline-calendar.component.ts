import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-dp-inline-calendar',
    standalone: true,
    imports: [MatCardModule, MatDatepickerModule, MatNativeDateModule],
    templateUrl: './dp-inline-calendar.component.html',
    styleUrl: './dp-inline-calendar.component.scss'
})
export class DpInlineCalendarComponent {

    // Datepicker Inline Calendar
    selected: Date | null;

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

}