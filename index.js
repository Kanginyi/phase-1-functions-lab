const distanceFromHqInBlocks = (num) => {
    const hq = 42;
    return Math.abs(num - hq);
}

const distanceFromHqInFeet = (blocks) => {
    const numBlocks = distanceFromHqInBlocks(blocks);
    return numBlocks * 264;
}

const distanceTravelledInFeet = (start, end) => {
    return Math.abs((start-end) * 264);
}

const calculatesFarePrice = (start, destination) => {
    const distanceFeet = distanceTravelledInFeet(start, destination);
    let price;

    if (distanceFeet <= 400) {
        price = 0;
    } else if (distanceFeet > 400 && distanceFeet <= 2000) {
        let check = (distanceFeet - 400) * 0.02;
        price = parseFloat(check, 10);
    } else if (distanceFeet > 2000 && distanceFeet <= 2500) {
        price = 25;
    } else {
        price = "cannot travel that far";
    }

    return price;
}