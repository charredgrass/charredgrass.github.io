var data = [{
    name: "Gaymes",
    pins: 9,
    dav: "https://cdn.discordapp.com/avatars/185043788446564362/ab09a94f45d1aaecf5f8fa78e507537b.png?size=128"
}, {
    name: "Saadie",
    pins: 2,
    dav: "https://cdn.discordapp.com/avatars/160126655233392640/a7233f1c3d1ec658692fcf4168af67a4.png?size=128"
}, {
    name: "Mini",
    pins: 2,
    dav: "https://cdn.discordapp.com/avatars/184444270789263360/d0cbde7472fa077f7032fcfdc075217e.png?size=128"
}, {
    name: "Charred",
    pins: 21,
    dav: "https://cdn.discordapp.com/avatars/154826263628873728/e46a4da0c47701b65af0c01a941e9181.png?size=128"
}, {
    name: "Juiceka",
    pins: 5,
    dav: "https://cdn.discordapp.com/avatars/186842783498108928/a_fc51a1ac04ba58fa63dfb5185133108f.gif?size=128"
}, {
    name: "BERSERK",
    pins: 1,
    dav: "https://cdn.discordapp.com/avatars/187533937294311424/0337a0c9460afdba0ddb73b807603c7e.png?size=128"
}, {
    name: "Bread",
    pins: 2,
    dav: "https://cdn.discordapp.com/avatars/224346334121951232/ea4af74124343c487f6078b17c014072.png?size=128"
}, {
    name: "Azure",
    pins: 4,
    dav: "https://cdn.discordapp.com/avatars/138888245235679232/abbd166801e1bab7cd146e2cc65f693b.png?size=128"
}, {
    name: "Blaze",
    pins: 1,
    dav: "https://cdn.discordapp.com/avatars/220579471407841280/b0e9845db6b5d54f042d93db8ceb8239.png?size=128"
}, {
    name: "MJinch",
    pins: 1,
    dav: "https://cdn.discordapp.com/avatars/151268910119780352/d2ed80c7b3d8603c640b4e707550280e.png?size=128"
}, {
    name: "Rogue",
    pins: 2,
    dav: "https://cdn.discordapp.com/avatars/181521801187295232/376a1e29eedb704d94f97747ccef2358.png?size=128"
}];

// d3.select("svg").selectAll("circle").data(data).enter().append("circle").style("")

// d3.select(".chart")
//     .selectAll("div")
//     .data(data)
//     .enter()
//     .selectAll("div")
//     .style("width", (d) => {
//         return d + "px";
//     }).text((d)=>{return d;});

// d3.select("svg").selectAll("circle").data(data).enter().selectAll("circle")

d3.select(".pies").selectAll("div")
    .data(data).enter().append("div")
    .style("width", (d) => {
        return d.pins * 10 + "px";
    }).style("height", (d) => {
        return d.pins * 10 + "px";
    }).style("line-height", (d) => {
        return d.pins * 10 + "px";
    }).style("background-image", (d) => {
        return "url(" + d.dav + ")";
    })
    .text((d) => {
        return d.name
    }).attr("title", (d) => {
        return d.name
    }).transition().duration(750).delay((d, i) => {return i*10})