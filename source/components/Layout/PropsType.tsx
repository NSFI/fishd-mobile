export interface LayoutRowPropsType {
  type?:string,
  gutter?:number | string,
  tag?:string,
  justify?:'start'|'end'|'center'|'space-around'|'space-between',
  align?:'top'|'center'|'bottom',
  onClick?:React.MouseEventHandler<HTMLDivElement>
}

export interface LayoutColPropsType {
  span?:number | string,
  offset?:number | string,
  tag?:string,
  onClick?:React.MouseEventHandler<HTMLDivElement>
}
