import { Component, Input } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-brand-typography',
    template: '<span class="wrapper"> {{ this.content }} </span>',
    styles: [".wrapper{font-size: clamp(1rem, 1rem + 0.5rem, 2rem); font-weight: 500;}"]
})

export class BrandTypographyComponent {
    @Input() public content: string | null = null;
}