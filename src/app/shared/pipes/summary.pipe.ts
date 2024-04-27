import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name : "summary"
})
export class SummaryPipe implements PipeTransform{
transform(value: string, start : number = 0, end: number = 20) {
    return value.split(" ").splice(start, end).join(" ") + '...';
}
}