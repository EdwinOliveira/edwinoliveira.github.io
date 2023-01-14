import { Component } from '@angular/core';
import { DividerComponent } from "../../atoms/divider/divider.component";
import { HeaderTypographyComponent } from "../../atoms/typographies/header/header-typography.component";
import { CardComponent } from '../../organisms/card/card.component';
import { CardModel } from '../../organisms/card/card.model';

@Component({
    standalone: true,
    selector: 'app-professional-career',
    templateUrl: './professional-career.component.html',
    styleUrls: ["./professional-career.component.scss"],
    imports: [HeaderTypographyComponent, DividerComponent, CardComponent]
})
export class ProfessionalCareerComponent {
  private readonly _collection: Array<CardModel>;

  public constructor() {
    this._collection = new Array<CardModel>(
      new CardModel("Software Engineer", "BJSS", "07/2022 - Current"),
      new CardModel("Software Engineer", "Devoteam", "04/2021 - 07/2022"),
      new CardModel("Software Engineer", "Libertrium", "09/2020 - 04/2021"),
      new CardModel("Internship/Freelance", "TomiWorld", "02/2020 - 09/2020"),
    );
  }

  public get collection(): Array<CardModel> {
    return this._collection;
  }
}
