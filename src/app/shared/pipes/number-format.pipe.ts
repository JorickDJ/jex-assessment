import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {
    transform(value: number): string {
        return value > 9999 ? `${value / 1000}k` : `${value}`;
    }
}