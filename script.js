function generatePhrase() {
	// おしゃぶりのリスト
	var phrases = ["ハノイのおしゃぶり", "ホーチミンのおしゃぶり", "フエのおしゃぶり", "ディエンビエンフーのおしゃぶり", "ダナンのおしゃぶり", "カントーのおしゃぶり", "ハイフォンのおしゃぶり"];
	// 画像のリスト
	var images = ["hanoi.jpg", "hochiminh.jpg", "hue.jpg", "dienbienphu.jpg", "danang.jpg", "cantho.jpg", "haiphong.jpg"];
	// ランダムなおしゃぶりを取得
	var randomIndex = Math.floor(Math.random() * phrases.length);
	var randomPhrase = phrases[randomIndex];
	// ランダムな画像を取得
	var randomImage = images[randomIndex];
	// おしゃぶりを表示
	document.getElementById("phrase").innerHTML = randomPhrase;
	// 適切なメッセージを表示
	switch (randomPhrase) {
		case "ハノイのおしゃぶり":
			document.getElementById("location").innerHTML = "ハノイはベトナムの首都です。フランス領インドシナ、ベトナム民主共和国、ベトナム社会主義共和国にかけて行政都市としての役割を担ってきました。";
			break;
		case "ホーチミンのおしゃぶり":
			document.getElementById("location").innerHTML = "ホーチミンはベトナム最大の経済都市です。ベトナム共和国が支配していた時代は、「サイゴン」と呼ばれました。";
			break;
		case "フエのおしゃぶり":
			document.getElementById("location").innerHTML = "フエは阮朝時代の首都です。一部の建造物はユネスコ世界文化遺産に登録されています。";
			break;
		case "ディエンビエンフーのおしゃぶり":
			document.getElementById("location").innerHTML = "第一次インドシナ戦争中、ディエンビエンフーではフランス軍とベトナム民主共和国軍による大規模な戦闘がありました。";
			break;
		case "ダナンのおしゃぶり":
			document.getElementById("location").innerHTML = "チャンパ王国の時代には、インドラピュタという名前の首都でした。ベトナム戦争では、テト攻勢の激戦地となりました。";
			break;
		case "カントーのおしゃぶり":
			document.getElementById("location").innerHTML = "カントーはメコンデルタ最大の都市です。食文化が豊かであり、ブンタン、マンゴー、ドラゴンフルーツのようなフルーツが豊富です。";
			break;
		case "ハイフォンのおしゃぶり":
			document.getElementById("location").innerHTML = "ハイフォンは阮朝によって建設された港湾都市です。ホンゲイ石炭の輸出が有名です。";
			break;
		default:
			document.getElementById("location").innerHTML = "いったい我々はどこに向かっているのだろう";
	}
      // 画像を表示
	document.getElementById("image").src = randomImage;
}
