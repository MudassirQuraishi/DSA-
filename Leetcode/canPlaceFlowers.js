var canPlaceFlowers = function(flowerbed, n) {
    let i = 0

	while (i < flowerbed.length && n > 0) {
		if (
			flowerbed[ i ] !== 1
			&&
			flowerbed[ i - 1 ] !== 1
			&&
			flowerbed[ i + 1 ] !== 1
		) {
			flowerbed[ i ] = 1
			i++;
			n--;
		}
		i++;
	}

	return n <= 0
};