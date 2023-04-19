const colors = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  rose: {
    0: "rgb(255, 240, 241)",
    1: "rgb(255, 230, 231)",
    2: "rgb(254, 205, 211)",
    3: "rgb(253, 165, 175)",
    4: "rgb(251, 111, 132)",
    5: "rgb(244, 62, 92)",
    6: "rgb(226, 29, 72)",
    7: "rgb(191, 18, 61)",
    8: "rgb(161, 18, 58)",
    9: "rgb(134, 19, 54)",
  },
  pink: {
    0: "rgb(253, 242, 248)",
    1: "rgb(252, 232, 244)",
    2: "rgb(251, 208, 232)",
    3: "rgb(249, 169, 213)",
    4: "rgb(244, 113, 181)",
    5: "rgb(236, 70, 153)",
    6: "rgb(219, 41, 121)",
    7: "rgb(191, 24, 93)",
    8: "rgb(155, 23, 76)",
    9: "rgb(129, 24, 66)",
  },
  fuchsia: {
    0: "rgb(253, 245, 255)",
    1: "rgb(249, 230, 255)",
    2: "rgb(245, 210, 254)",
    3: "rgb(240, 171, 252)",
    4: "rgb(232, 123, 249)",
    5: "rgb(217, 72, 239)",
    6: "rgb(191, 39, 211)",
    7: "rgb(163, 29, 175)",
    8: "rgb(133, 25, 143)",
    9: "rgb(113, 26, 117)",
  },
  purple: {
    0: "rgb(250, 245, 255)",
    1: "rgb(242, 230, 255)",
    2: "rgb(234, 214, 255)",
    3: "rgb(216, 180, 254)",
    4: "rgb(191, 131, 252)",
    5: "rgb(168, 85, 247)",
    6: "rgb(146, 52, 234)",
    7: "rgb(126, 34, 206)",
    8: "rgb(106, 33, 166)",
    9: "rgb(89, 28, 135)",
  },
  violet: {
    0: "rgb(247, 245, 255)",
    1: "rgb(235, 231, 254)",
    2: "rgb(222, 215, 254)",
    3: "rgb(195, 180, 253)",
    4: "rgb(166, 137, 250)",
    5: "rgb(137, 90, 246)",
    6: "rgb(124, 59, 237)",
    7: "rgb(107, 38, 217)",
    8: "rgb(90, 33, 181)",
    9: "rgb(77, 29, 149)",
  },
  indigo: {
    0: "rgb(240, 243, 255)",
    1: "rgb(224, 232, 255)",
    2: "rgb(200, 211, 254)",
    3: "rgb(166, 180, 252)",
    4: "rgb(130, 141, 248)",
    5: "rgb(100, 103, 242)",
    6: "rgb(80, 72, 229)",
    7: "rgb(70, 58, 203)",
    8: "rgb(55, 47, 162)",
    9: "rgb(49, 46, 127)",
  },
  blue: {
    0: "rgb(240, 246, 255)",
    1: "rgb(220, 235, 254)",
    2: "rgb(190, 219, 254)",
    3: "rgb(145, 195, 253)",
    4: "rgb(97, 166, 250)",
    5: "rgb(60, 131, 246)",
    6: "rgb(36, 99, 235)",
    7: "rgb(29, 79, 215)",
    8: "rgb(30, 63, 174)",
    9: "rgb(30, 59, 138)",
  },
  sky: {
    0: "rgb(240, 249, 255)",
    1: "rgb(225, 243, 254)",
    2: "rgb(186, 229, 253)",
    3: "rgb(126, 212, 252)",
    4: "rgb(58, 191, 248)",
    5: "rgb(13, 162, 231)",
    6: "rgb(2, 132, 197)",
    7: "rgb(3, 105, 160)",
    8: "rgb(7, 87, 131)",
    9: "rgb(12, 74, 110)",
  },
  cyan: {
    0: "rgb(235, 254, 255)",
    1: "rgb(205, 250, 254)",
    2: "rgb(166, 244, 252)",
    3: "rgb(103, 232, 249)",
    4: "rgb(32, 211, 238)",
    5: "rgb(7, 182, 213)",
    6: "rgb(8, 142, 175)",
    7: "rgb(14, 116, 144)",
    8: "rgb(21, 95, 117)",
    9: "rgb(22, 79, 100)",
  },
  teal: {
    0: "rgb(242, 253, 250)",
    1: "rgb(203, 251, 240)",
    2: "rgb(152, 246, 227)",
    3: "rgb(93, 234, 213)",
    4: "rgb(43, 212, 189)",
    5: "rgb(20, 184, 165)",
    6: "rgb(13, 150, 139)",
    7: "rgb(15, 117, 109)",
    8: "rgb(17, 95, 90)",
    9: "rgb(19, 78, 74)",
  },
  emerald: {
    0: "rgb(237, 253, 245)",
    1: "rgb(209, 250, 229)",
    2: "rgb(165, 243, 207)",
    3: "rgb(110, 231, 183)",
    4: "rgb(54, 211, 153)",
    5: "rgb(16, 183, 127)",
    6: "rgb(5, 148, 103)",
    7: "rgb(4, 119, 86)",
    8: "rgb(6, 96, 70)",
    9: "rgb(6, 76, 57)",
  },
  green: {
    0: "rgb(242, 253, 245)",
    1: "rgb(222, 252, 233)",
    2: "rgb(187, 247, 208)",
    3: "rgb(133, 239, 172)",
    4: "rgb(74, 222, 128)",
    5: "rgb(33, 196, 93)",
    6: "rgb(22, 162, 73)",
    7: "rgb(21, 127, 60)",
    8: "rgb(22, 100, 52)",
    9: "rgb(20, 82, 45)",
  },
  lime: {
    0: "rgb(247, 254, 231)",
    1: "rgb(235, 252, 202)",
    2: "rgb(217, 249, 159)",
    3: "rgb(190, 242, 99)",
    4: "rgb(161, 230, 51)",
    5: "rgb(130, 203, 21)",
    6: "rgb(102, 165, 13)",
    7: "rgb(76, 123, 15)",
    8: "rgb(64, 99, 18)",
    9: "rgb(53, 82, 20)",
  },
  yellow: {
    0: "rgb(254, 252, 231)",
    1: "rgb(254, 249, 195)",
    2: "rgb(254, 240, 139)",
    3: "rgb(253, 223, 73)",
    4: "rgb(250, 204, 20)",
    5: "rgb(231, 176, 8)",
    6: "rgb(200, 138, 4)",
    7: "rgb(162, 97, 7)",
    8: "rgb(134, 78, 14)",
    9: "rgb(115, 63, 18)",
  },
  amber: {
    0: "rgb(255, 251, 235)",
    1: "rgb(254, 243, 200)",
    2: "rgb(253, 230, 139)",
    3: "rgb(252, 212, 79)",
    4: "rgb(251, 189, 35)",
    5: "rgb(245, 159, 10)",
    6: "rgb(219, 119, 6)",
    7: "rgb(179, 83, 9)",
    8: "rgb(145, 64, 13)",
    9: "rgb(118, 53, 15)",
  },
  orange: {
    0: "rgb(255, 246, 235)",
    1: "rgb(255, 237, 214)",
    2: "rgb(254, 214, 169)",
    3: "rgb(253, 186, 114)",
    4: "rgb(251, 146, 60)",
    5: "rgb(249, 116, 21)",
    6: "rgb(233, 89, 12)",
    7: "rgb(192, 63, 12)",
    8: "rgb(155, 52, 18)",
    9: "rgb(125, 45, 18)",
  },
  red: {
    0: "rgb(254, 241, 241)",
    1: "rgb(254, 225, 225)",
    2: "rgb(254, 200, 200)",
    3: "rgb(252, 166, 166)",
    4: "rgb(248, 114, 114)",
    5: "rgb(239, 67, 67)",
    6: "rgb(220, 40, 40)",
    7: "rgb(186, 28, 28)",
    8: "rgb(152, 27, 27)",
    9: "rgb(129, 29, 29)",
  },
  warmer: {
    0: "rgb(250, 250, 249)",
    1: "rgb(245, 245, 244)",
    2: "rgb(231, 229, 228)",
    3: "rgb(214, 211, 209)",
    4: "rgb(168, 162, 159)",
    5: "rgb(120, 114, 109)",
    6: "rgb(86, 82, 78)",
    7: "rgb(68, 64, 60)",
    8: "rgb(41, 37, 36)",
    9: "rgb(28, 25, 23)",
  },
  warm: {
    0: "rgb(250, 250, 250)",
    1: "rgb(245, 245, 245)",
    2: "rgb(230, 230, 230)",
    3: "rgb(212, 212, 212)",
    4: "rgb(163, 163, 163)",
    5: "rgb(115, 115, 115)",
    6: "rgb(82, 82, 82)",
    7: "rgb(64, 64, 64)",
    8: "rgb(38, 38, 38)",
    9: "rgb(23, 23, 23)",
  },
  gray: {
    0: "rgb(250, 250, 250)",
    1: "rgb(244, 244, 245)",
    2: "rgb(228, 228, 231)",
    3: "rgb(212, 212, 216)",
    4: "rgb(161, 161, 170)",
    5: "rgb(113, 113, 122)",
    6: "rgb(82, 82, 91)",
    7: "rgb(63, 63, 70)",
    8: "rgb(39, 39, 42)",
    9: "rgb(24, 24, 27)",
  },
  cool: {
    0: "rgb(249, 250, 251)",
    1: "rgb(243, 244, 246)",
    2: "rgb(229, 231, 235)",
    3: "rgb(209, 213, 219)",
    4: "rgb(156, 163, 176)",
    5: "rgb(107, 114, 128)",
    6: "rgb(75, 85, 99)",
    7: "rgb(56, 66, 82)",
    8: "rgb(31, 41, 55)",
    9: "rgb(17, 24, 39)",
  },
  cooler: {
    0: "rgb(248, 250, 252)",
    1: "rgb(241, 245, 249)",
    2: "rgb(225, 231, 239)",
    3: "rgb(203, 213, 225)",
    4: "rgb(148, 163, 184)",
    5: "rgb(101, 117, 139)",
    6: "rgb(72, 86, 106)",
    7: "rgb(52, 66, 86)",
    8: "rgb(29, 40, 58)",
    9: "rgb(15, 23, 41)",
  },
};

export default colors;
