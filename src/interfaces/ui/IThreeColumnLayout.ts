export interface IThreeColumnLayout {
  ui?: { content: { heading: string } };
  leftPanel: React.ReactElement;
  children: React.ReactElement;
}
