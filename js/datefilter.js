$('#daterangepicker').daterangepicker({
    "locale": {
        "format": "DD/MM/YYYY",
        "separator": " - ",
        "applyLabel": "Kirim",
        "cancelLabel": "Batal",
        "fromLabel": "Dari",
        "toLabel": "Ke",
        "customRangeLabel": "Custom",
        "weekLabel": "W",
        "daysOfWeek": [
            "Mgu",
            "Sen",
            "Sel",
            "Rab",
            "Kms",
            "Jum",
            "Sbt"
        ],
        "monthNames": [
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember"
        ],
        "firstDay": 1
    },
    "showCustomRangeLabel": false,
    "startDate": "25/03/2021",
    "endDate": "31/03/2021",
    "opens": "left",
    "drops": "down"
}, function(start, end, label) {
  console.log('New date range selected: ' + start.format('DD-MM-YYYY') + ' to ' + end.format('DD-MM-YYYY') + ' (predefined range: ' + label + ')');
});