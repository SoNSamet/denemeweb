'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "83ff036ac533544ddf84fb22edf62c2d",
".git/config": "cd038accc01fd31481008ef3ae973da6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8821e4fed6eb68216fbcac9723e10ed7",
".git/HEAD": "ccf31fe589a495f4c8b1051bde8bb69a",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bfbd1c5a71292161825b20505a99442e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "aebdb6cf310fa81a9f1a7d5a7ff236a1",
".git/logs/refs/heads/master": "e66eb975e83ad3542b232b0a809bd624",
".git/logs/refs/heads/samet": "ebb6751e2c731c116f29268d44e72078",
".git/logs/refs/remotes/origin/master": "0648a146f9c5bd88bb272f7f530bf76c",
".git/logs/refs/remotes/origin/samet": "493566ed373191a139e994f81af81613",
".git/objects/02/eba94cfc034b791a1bf06462d63a59e2a7483a": "d361031ae1608ffe1db60c885b6c5eec",
".git/objects/04/6a1157d25c516c452e4f5b2d25753dcacac8ec": "73480116017448d519531a6ad8913de5",
".git/objects/05/0c13868f6001ff505a1cc344d3e8a01bc60c22": "7b1b285acdf2f56ad0c6e0cc9f1a536c",
".git/objects/05/f7ddb9ef80b4e4f66abf3ac3558edc7000c13d": "18bd631557170fb21f2787d3078647cd",
".git/objects/08/0a4b31b9c9ecab34101e5de0ee22baa1e4afcd": "9ac338d6dc7d54d9d90500ad55267b66",
".git/objects/0a/045b09af3a39ef4d2ad21d0fbc06a44c319711": "ca082efea611f01b6abfd35227edbf2f",
".git/objects/0b/5529e57e18f8b2f41378a8ab9c0ca309acd269": "49f1b6c54d1136d2009423f9aebd6b2e",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0f/9a58366fc41bf128799fd513c0f4829ba13032": "c67369757711be27dc9113d1ba5b39d1",
".git/objects/10/7302874e3c3f7966cc02c72efcfee93e398af5": "c4cd4fec13614d594af08bb5fa5afcee",
".git/objects/10/cf670ca090cf890467402f108f748ad4744c1a": "ac9a1503528271a1bd6cb36669c69694",
".git/objects/11/c36f492f1910512b548a7d46564aae322f7a70": "2d539c6c0dd03b57c42c1f52eef841de",
".git/objects/13/146e7939b62ffc863feacb80f4e9e592765009": "4f3077b1bd22dc58ddc4d8c8e22797ed",
".git/objects/14/7c0eb1e3e6fc3294cb545c8931a0b1c75f87c2": "5dfc1b630d34a29c472c83766348966b",
".git/objects/16/821312d03b7e20465152d82bd1e3a142b5472e": "fef9cc1cc45327cfe933924b69b9c0fc",
".git/objects/16/bcd04bd0f404fcf017534192a18a3b76f7b7ee": "b784d0e9853bfed216832f608bf08877",
".git/objects/1b/2066b0a64c8593c30c2805cda3a6180088aec5": "d677e69d44b1234f0bc74879559fc2f3",
".git/objects/1f/7ddb95cf9eab3a4fb88d68ecad7ba0c36f257f": "11b500d576c33498ce8e64635a48a1e8",
".git/objects/24/2f3a4bb796dea822e4094b820c6e46aa638914": "0b96f400832666d9e64e03e90860f8cd",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2c/070c9ea47888f18a017e205677c4ade923799d": "2ca0c168ea5f8c50fafe7798c2534e88",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/d1c954801bbdf3956e7e3b0ddc80ddef966e30": "eae1652a6dfda72d1fb8deb59455f83c",
".git/objects/31/7a7e7906f99b7348796f1ec8bf2c7f2ecefed1": "23aff2768ef754b9e08a205d4f247295",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/e8e4f91297fc87f193ae009ee73cda1f334350": "c843de2e1b4f46ce3b6a2f4a8555195a",
".git/objects/36/55cd964617d6c2e384f905f17fff14dd13b204": "668c982e5e5c3e5506a7836b8c060989",
".git/objects/3a/4bc75a205245bc5a7cdd51c61aee9c8156426a": "0e2a159c893244d816a2c9f448c956eb",
".git/objects/3e/430873ae2d4677a02876bbd0d641d5aaae2326": "fb966add400cf4a0315779fbfac178ed",
".git/objects/3e/fb43ad742f9239c50a7c5337e4878650adad83": "2a205c954f2a14ff788d03c575c12f7e",
".git/objects/43/09802630062c555c141d46a37e0cf07cf6e170": "bd501352ac92ef1bda414160856e8812",
".git/objects/43/fcb02d66105c8d2ea1e3352103fef20c56e171": "f0f76cd9b4e08fe19794c3d986507850",
".git/objects/44/db934f79fb2bac148a24d78858e0bad8ab4deb": "fcc41054a2b35785d681030fe9d77592",
".git/objects/45/831ccacca4e6a18a2e88ff65df37f41339dae8": "5bc6604f3f72905dddb9eabaef36690b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/3efc39f671f5d2f53362f8f43256ba106f2abd": "fe802d744e90290ffb70d259604530e3",
".git/objects/49/40b1cc43137ceae9158ba0614eeec50abbe14e": "07358d7e20886a3e08f30a65c9dc66b4",
".git/objects/4a/175e19fb7b27cd3f24f932e593f3fb757d06fd": "c832f5beb424e7f29683e23f72eea878",
".git/objects/4c/d2a10c00a250b6db35be1f5497a8151d271125": "620eda973425da686e5bf30da06bfed8",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/56/561f4cb757fff70bb5000fc5d0c509af5ff7c6": "3bdea43596374f7f01a8ad60d21c26d3",
".git/objects/56/5f1bea117c64b9b1b3b9aeebf7a0e94ce95fad": "07bf50edb102b7584f060f99b73479e7",
".git/objects/58/e0340e56478d8cec513c509529d68374ee3e3b": "200b815d840bba1f605680cf418956f8",
".git/objects/59/b33dce4f409558ca4a4980a424f40d2d167997": "3fb6b44eb50cfa95ea4d0a7611ca65c5",
".git/objects/5a/072c4e58ae108b5a2dabebc57eeaa2cef8c749": "80d67bb1b0f6551ab5bf0ecf56d9b6f0",
".git/objects/5a/a1c5d74f36bc2cb4b39cd4c63f03f92da50e57": "d121198cdeacc9de98f0daffde348288",
".git/objects/5c/a53499b4de1343fde9a1fa58cb8a01b770bf1e": "db88ecbb141a4a686d69e14ec43de686",
".git/objects/5c/ed13c2f682934a1b0babc8d17cf8eb0b17dcdc": "da01ec4b59040dde45e3f9471cbe2add",
".git/objects/5d/a382e0560f54a76909ea724340a6ce79fffbb0": "a8a7ba901adc5c45aa9871e28cf5cfbf",
".git/objects/5e/557c025427390a7a50fc1a610a2a8335089263": "4d44939a1381538b852ed49799b8960a",
".git/objects/61/c06fa000bc7b54ba0ea28d3786a2ed9e8741cc": "fe337a66e084f0ff83a1a5e19d0a5f1f",
".git/objects/62/129e0c163887b543f90419ff3d3be867c11ccd": "52f934952b07ccaf1ae4b7a67b00e98d",
".git/objects/62/59a5bd5251e9827f9ac7f9137277c91bba7030": "4f2bdd945e87685eb267c8ce7dd8c783",
".git/objects/66/4ccce0229f6cb045f6376160f5324931af610d": "2716bb3f5540eac793e9cf6e868096d0",
".git/objects/67/0228afc77a4d35503a5b5085fae83c89def33d": "7d5df1ce759ff00acc19cfb1cdc2b4a9",
".git/objects/69/21ce91f1bb12430e7be8460b068627ffc36abf": "4636c9f8ef2a8e4fa30c6623f400dac0",
".git/objects/6b/5e795e36c9dd3ddfe7bb35e8331b8b0af8f094": "b64a294f40e09a554139527427140205",
".git/objects/6c/836b054a6329237bf7a415d8ae36c2965b639d": "a9607383c7171c61011db68b70602e3e",
".git/objects/6d/bccb365b63aa847fef2f07f4b73855d75c756d": "1d653cfe43cbb36a0e151dc2d568ca08",
".git/objects/6d/e1b47a3a885630d616000d8234b97ce56b9d37": "cfc54702f6da8cac17ac0f860b7e8e5b",
".git/objects/70/da4ab13da599768743caf5fe6343a1423e66d4": "78022d6a35ca3ab94a59ccc053f85fcd",
".git/objects/71/bd73305e19e3368d7debed4efe55d425e85799": "616ecfe770959d7abba524867df102a3",
".git/objects/73/8a7d49ee69a8a96b350eee4b804b570ef36a5f": "ae508f5c6911d949f89d428dee8b6b7e",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/c151875a09a563c170d9634e68b9e68a02e59b": "45d24b89d1aa72f261ec8c5362c989e7",
".git/objects/77/e31ff37622f925ade3e40c3dc8408a24be1a0c": "b688779f7ddef31f9a8627cdd7a6bcac",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/9d3bd766c4af707237ec05c53e733e51ced14d": "513f0f15144cf4e648d042a56a8c12e0",
".git/objects/7b/f65297cb83cd10ed79fe7238707de374e983af": "7044b78d5a926c5962a0dc4bd0b89136",
".git/objects/7c/d2c7386e5f9ef78cf28e55a1da726a920e53b0": "6d3260e388d479c2631cb91d52e53aae",
".git/objects/7c/e4903b6dba468895a40f7d60bc6545614c30cd": "1e98e4da3cff5fc96e5dde044c5daa8c",
".git/objects/83/9b49d3337536d7f6e0e07d788bd2569a216971": "01004ca684f255f0c00eb1b902ab575e",
".git/objects/87/5f88ef43b5e734e5c6fac2a5503c38a13a32c2": "ab26b5554df80391a1a3bf2c75d11316",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/a78a8d81596fb058d7cc7174af30c785fe026b": "db0fd79a1f90c6bad0507fa6dc62d05c",
".git/objects/89/ae4968c2f799c118bf508c44c51580c8abcbc9": "50932222ce435286c48b640f34f6f728",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/cb6c579ed1d7203732529eb75cf4ae1249bd0a": "c7987d6d8996e2011d74f16bcd80394a",
".git/objects/91/25c284e23f81c679481d16194b8d97fbc017d0": "5d68ddb0ed1fd55e71ba1fa12d5700fd",
".git/objects/91/f7efc0c269da64ae1613f9eb963798c42b875b": "ba00dcdb823ca31ac00c987e9d4fcd02",
".git/objects/95/1440730ff61cab4ead3c3fa5114ceeaae9e8d1": "17c205f1040e13d3562a25c50f41c674",
".git/objects/95/e6b28b7cd52860342afbc34adf1a2a6064b369": "6bffa2cb06a30acd390a13e7624a4dc4",
".git/objects/99/592ec72da1348414e145c148a85624ec12d29b": "6fdd21e77b94057efff741e3704b575b",
".git/objects/99/b193dda32788423effb574f5cc0925eb8f71bf": "5f30f7dbb18d11dcd59352dc82025880",
".git/objects/9e/e2f7bc520f90e14e4b225b3f3ed8019dde5f3e": "0926b613beb5010f821aece20f6a78ae",
".git/objects/9f/68561166d27c41c9055372fd0216a34e953e16": "851d506765fde3e9c81c60155103807b",
".git/objects/a0/1a5ffa0c2ef91c919fc51cec2137f44cd835a2": "6ce2cc205162e576287c8056f09dab6c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/600fcbcdbedc5c2e6f906dd50e3a87e9701e2d": "277d9098c347341cc469d8dfc46f3cbb",
".git/objects/a3/c89d4c0de480d0f3080ef863e771b3e196e710": "82c5d01d0a74e38144f230fe148250e6",
".git/objects/a4/1f1d0182128e4e48276808adad85f35a382576": "e03ba4179cfad516f9cc9431bbe7972c",
".git/objects/a8/0731fec90c5cbe2e870349e97a00cac38ccb66": "b0554740621f58e19516a370c0901854",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/b6903e21338dcebe9fc45436e5a43cbb41b9e3": "1e913330047df881e041d2698bd165cc",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/1419a0ec971197e6390b3b95780a7edc234f43": "cb805646860b76f0b3700be82fff49f3",
".git/objects/b2/7fcdfc31052ed00dd747eca18bb8c576681e3a": "d8e455e47a0681c617639f5c88c72543",
".git/objects/b2/e77b184f94fe5688a981a3b35574aca64b4932": "1d613909d8727ddb65719251defc6a64",
".git/objects/b3/7e0a016adb4ca59435b285bc6788b692d88e7c": "5e93c813f2990fad5ba49d598e53fc11",
".git/objects/b4/830aa134ea2c09600182f7732f11d9ef31c4c6": "de57de61c08ae21b08f42319f2692dca",
".git/objects/b5/18010f9489295e96567456842dab4c97eba66b": "e8da1ecd5c4ec257deb1ea562a9e9f65",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/f6085de9036fa3f7f168e5ff040d871693c5a6": "803a4aca2b3357e3174f4e84bcdb4c8d",
".git/objects/bc/a6913ae9a7b7999695034725664a5b75742a27": "16402ad799b035c3419b4e2cb95e3f4e",
".git/objects/c0/aec8d87ca02751ab364e2b4b396fcbca27d111": "d02abf8c7dc1b52eae9f8b6f07bf7e13",
".git/objects/c8/405c0643883fa921168cf1cec95191c03f0d2a": "4a6b8db96a14bb63cb5fb615f93d97ff",
".git/objects/cf/3abb707c9a629b15738e87fe9ff9a3d25c37c5": "095e0f114062827509cc67645aefab74",
".git/objects/d1/bf8a42fc556b951ac5e4ee37e2bd0056ba5470": "d2a85604b1139d9a0d5fa93321eee4a2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/5da502084031b93ab3451c6869c4de962f1f86": "004ceb7faf8b1cd417d292e9c799913b",
".git/objects/db/9b22ea43655d9a75aa70b8280b6a693f404e50": "57a5619df12322e62dbc17ff1e0aa197",
".git/objects/db/a0721bab30d7fd9ca7e53a2f0b61388add6e77": "9b7754cbe49a8db32f8336aa42a9011a",
".git/objects/de/0c032b55dca8d7a87a99ef99f65a3c1a5b7855": "c4f51fe30377badd1c3e1390e143156c",
".git/objects/e0/3dfd1c0cea463fb0ba6f6278186e7098d5b827": "448c5d3673e57cef1afc1ea7b59c9960",
".git/objects/e0/721b475dac98b548f03e310a1820c8f0fc5bfe": "03ad81804090e67522203291e3263af6",
".git/objects/e0/b9eea36b6894cf40ad1352561ed31fdc96a4b1": "8a22ca85838a71712a76acf1b6e7202a",
".git/objects/e3/ca44a97dce58c5025048256fb5ac5858240186": "2ea31774af3a4f4a6db0e1f6c55a5ce1",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/28d2efa49e5c382954c52f857a6fd3b83a8ace": "4c34fde3034b8ff27e4cd830a0b4a586",
".git/objects/e8/2f4ef780add70f8eeb1c3a966ddf86485a8537": "c1fcc2e96bd7f6401a266855bf55bcf3",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/78a3bbd9b1b57b3acd6e4a8bd31623f74377f3": "1c901cc2394dc9a1fe2af1803fb083a5",
".git/objects/ed/031847a422fd50f0d9b584429ebbd1dbf529c2": "40f71070538b3627bca7468df6402b6f",
".git/objects/f1/165ea70d1201dab58705dcca20e4e36d357ebf": "6a3d5b295883476a99f15b70abe48378",
".git/objects/f1/fffa7c3567e65cd831d71e47848020155d1347": "34f6c6b4007ffc7420cc618c584ddbbb",
".git/objects/f4/66006ae10a7146f653b420a372209bb695c9d3": "1a67438987642c59f8e9f3bc1d254029",
".git/objects/f5/2b8275eeed53669be147c5a0988a0b341242aa": "8f98a8aaafd52c7e04916bc19eb00d7f",
".git/objects/f7/7c7615d6ed13d5afd16bc6bd13bd5c592a1dca": "7eb360aeb17ee801f4b819568c037aee",
".git/objects/f7/b86190a9a2ec2125f4812c9d0681dc23c4f1ce": "78fcd6eb1cb5e82c9f510f7a64d3af69",
".git/objects/f8/614c5cb3c352abb441ca80779e356cfabb6f82": "94f7bfe725085e832020156dab2429e1",
".git/objects/f8/7f3d6d2db456438dc86f4b36eb7816fe92ce3f": "d8516225890a40c62df078e6f69def31",
".git/objects/fb/7aa18587691604e4bcf514557bacdf0f365c01": "c810b2d65cdde462402e1060dbbe55ba",
".git/ORIG_HEAD": "04de0fba289d8daaf0197ac0e16131c2",
".git/refs/heads/master": "8302cfe55eb0ea3e98837df3d1b5772e",
".git/refs/heads/samet": "8302cfe55eb0ea3e98837df3d1b5772e",
".git/refs/remotes/origin/master": "954857b56e283ce0987a4d2bca8e296f",
".git/refs/remotes/origin/samet": "8302cfe55eb0ea3e98837df3d1b5772e",
"assets/AssetManifest.json": "4c792a7bc01c560821244be672b7c30d",
"assets/assets/images/adImage/ad1.png": "1417f155065c2701b7f061868e9aacef",
"assets/assets/images/adImage/ad3.png": "304cd6270691fccd8d3d24921f992223",
"assets/assets/images/background/about_header.png": "3fb6d2d772c2cc2b6f7b9ce681298c46",
"assets/assets/images/background/anaSayfa.png": "6c7542d95b0b37987a1a28ff9e35378c",
"assets/assets/images/background/anaSayfaCut.png": "666f63bd4054b2d552792b1179b35bfc",
"assets/assets/images/background/backg.png": "492bf5e89905a082d3f2aea156504b09",
"assets/assets/images/background/Group40.png": "752c689200a5993de89cc16d8102f65f",
"assets/assets/images/background/hizmetSayfas%25C4%25B1.png": "08b1f2c2027ef8b143efc6e3e8ae6534",
"assets/assets/images/background/hizmetSayfas%25C4%25B1Cut.png": "6a7e442a4e3c64d59a7479e725edac28",
"assets/assets/images/background/Katman2.png": "3bab225e1b135af3f6435af1a8141e3b",
"assets/assets/images/card/card1.png": "464d7a7a39aee3a93f8732ebeb48ed94",
"assets/assets/images/card/card2.png": "210e7da3c3d0cdb18649fbbc100fd53e",
"assets/assets/images/card/card3.png": "45db2bb39c238ba3c247c2dfb3982dd7",
"assets/assets/images/card/card4.png": "ede4444f44c7f1d7c94c7fcf75284978",
"assets/assets/images/card/card5.png": "22912abccb201760b84629bef1f1e770",
"assets/assets/images/card/card6.png": "e65b09d7d852958373983a0c093ea1ae",
"assets/assets/images/icon/cup-2.png": "671485cf0ef464ede624ac815836fc1a",
"assets/assets/images/icon/edit_profile_circular.png": "46bcbc0c871741a6dd0406b64a91a6ad",
"assets/assets/images/icon/element_air_icon.png": "2f5a9d9934cf453401e7fc347f9f950d",
"assets/assets/images/icon/element_earth_icon.png": "a83b4638884922ff330928b28a541d0d",
"assets/assets/images/icon/element_fire_icon.png": "86508da533d69ecf35bb467b881819c4",
"assets/assets/images/icon/element_water_icon.png": "3298d381bc94c5583ede70ab54d81364",
"assets/assets/images/icon/facebook-icon.ico": "d855b8d41bf273c66bcbca7ed6a09364",
"assets/assets/images/icon/gender_female.ico": "9fe0aa6887a9cbe3868ea2e9ce4db5b9",
"assets/assets/images/icon/gender_male.ico": "37eeaf49d3f29d4cabc61a7091808925",
"assets/assets/images/icon/gender_non-binary.ico": "1afe4f406bef3b0ff3cdef41f3fd6c44",
"assets/assets/images/icon/google_icon.ico": "7fa97c71202620686c9c679c3f61b9f5",
"assets/assets/images/icon/grey_rewind.png": "291d697e4c66ea11992c061524441356",
"assets/assets/images/icon/instagram-icon.png": "f2dea9574a1413438c7de5fde22c26e3",
"assets/assets/images/icon/like.png": "4ba0b11539b3d46effcebd37b7414d47",
"assets/assets/images/icon/message-box.png": "f287f7337463e9d43252d5b59c1a8576",
"assets/assets/images/icon/moon_sign.png": "850e90a0f033fb814be01932231070d0",
"assets/assets/images/icon/nope.png": "9673aff6c0507f397226d01c3e220b1a",
"assets/assets/images/icon/ok_sa%25C4%259F.png": "6b9a178cf3f30169c5c27a9de5737465",
"assets/assets/images/icon/ok_sol.png": "5f9d535ecc65dc46d103a88b181214d4",
"assets/assets/images/icon/pinterest-icon.png": "b92f16467acf3de944383ed79fdd953b",
"assets/assets/images/icon/profile-1.png": "898495295cf11268c318ef7c80100f96",
"assets/assets/images/icon/rising_sign.png": "159cf304145119d4174978a56be49c06",
"assets/assets/images/icon/settings_circular.png": "0ee1955ec031db2e33e2a9de228c0350",
"assets/assets/images/icon/shop.png": "abc76679cf8f66be6afcb60c8a098528",
"assets/assets/images/icon/sun_sign.png": "94e2b8f77c80049b30eaa3b4888a9047",
"assets/assets/images/icon/super_like.png": "13f274e98d09fbdd6b77f6d7ac5f66aa",
"assets/assets/images/icon/swipe-1.png": "7591a64f9e9cf0a4323ca93a86934037",
"assets/assets/images/icon/tick.ico": "fc528ea9575978e84faf83f4baab1ecf",
"assets/assets/images/icon/twitter-icon.png": "00de0742afc224236a0b3b1147f80575",
"assets/assets/images/icon/yuyyu_coin.png": "5c72886c27b65cf47443d9e7199066c4",
"assets/assets/images/logo/fire.png": "7f978f0d5cba541dbdb95af6c8a3dbaa",
"assets/assets/images/logo/logo.png": "fb4f0eafb6fd5d73a3f5b8246bec202b",
"assets/assets/images/logo/logo_text.png": "a0aeb2bd6b78bb81ead7451ec0bb6ed7",
"assets/assets/userImages/image_3.jpg": "63aae95f60bd3d3df83f62a0d9e50186",
"assets/assets/userImages/image_4.jpg": "58de98c36df68863bf5c1cc5c9061dc9",
"assets/assets/userImages/image_5.jpg": "9dfeca4337ef8f511fd1387a7bb734c4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "d02e5e202c3f5e66159f97620cffb3dc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "dc5d947097f74711bd0eae9eea725140",
"/": "dc5d947097f74711bd0eae9eea725140",
"main.dart.js": "92839251dc6b113a989a269f5b0914e0",
"manifest.json": "a07254bf4fa03f551995b1cbf2ac8b1e",
"version.json": "6531f80211781a8eee5f945b5ca0083d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
