import { Component } from '@angular/core';
import { HeaderTypographyComponent } from "../../atoms/typographies/header/header-typography.component";
import { DividerComponent } from "../../atoms/divider/divider.component";
import { CardModel } from '../../organisms/card/card.model';
import { CardComponent } from '../../organisms/card/card.component';

@Component({
    standalone: true,
    selector: 'app-academic-career',
    templateUrl: './academic-career.component.html',
    styleUrls: ["./academic-career.component.scss"],
    imports: [HeaderTypographyComponent, DividerComponent, CardComponent]
})
export class AcademicCareerComponent {
  private readonly _collection: Array<CardModel>;

  public constructor() {
    this._collection = new Array<CardModel>(
      new CardModel("Master's Degree - Computer Science", "Polytechnic Institute of Viseu", "09/2021 - Current"),
      new CardModel("Bachelor's Degree - Computer Science", "Polytechnic Institute of Viseu", "09/2017 - 07/2020"),
      new CardModel("CTESP - Computer Science", "Polytechnic Institute of Viseu", "09/2015 - 07/2017"),
    );
  }

  public get collection(): Array<CardModel> {
    return this._collection;
  }
}
