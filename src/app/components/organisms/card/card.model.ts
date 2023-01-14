export class CardModel {
  public constructor(
    private readonly _content: string,
    private readonly _subContent: string,
    private readonly _thirdContent: string,
  ) {}

  public get content(): string {
    return this._content;
  }

  public get subContent(): string {
    return this._subContent;
  }

  public get thirdContent(): string {
    return this._thirdContent;
  }
}
