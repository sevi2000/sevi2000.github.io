const projects = [
  {
    id: 0,
    name: "ADP Couverture Ravalement",
    description: "Simple website for a roofing company",
    image: "./adp_couverture.png",
    repo_link: "https://adp-couverture-ravalement.fr",
    tags: [
      { tag_text: "spring boot", tag_link: "https://github.com/topics/springboot" },
      { tag_text: "react.js", tag_link: "https://github.com/topics/react" },
      { tag_text: "java", tag_link: "https://github.com/topics/java" },
      { tag_text: "tailwind css", tag_link: "https://github.com/topics/tailwindcss" },
    ]
  },

  {
    id: 1,
    name: "Diet Sport 91",
    description: "Full stack sport website including several sport programs and online payments",
    image: "./diet_sport.png",
    repo_link: "https://diet-sport-91.fr",
    tags: [
      { tag_text: "spring boot", tag_link: "https://github.com/topics/springboot" },
      { tag_text: "react.js", tag_link: "https://github.com/topics/react" },
      { tag_text: "java", tag_link: "https://github.com/topics/java" },
      { tag_text: "tailwind css", tag_link: "https://github.com/topics/tailwindcss" },
    ]
  },
  {
    id: 2,
    name: "Energy",
    description: "Implementation of the energy game as University project",
    latest_release_link: "https://github.com/sevi2000/Energy/releases/tag/1.0.2",
    download_link: "https://github.com/sevi2000/Energy/releases/download/1.0.2/default.jar",
    image: "./energy.gif",
    repo_link: "https://github.com/sevi2000/Energy",
    tags: [
      { tag_text: "game", tag_link: "https://github.com/topics/game" },
      { tag_text: "gradle", tag_link: "https://github.com/topics/gradle" },
      { tag_text: "java", tag_link: "https://github.com/topics/java" },
      { tag_text: "junit5", tag_link: "https://github.com/topics/junit5" },
      { tag_text: "swing-gui", tag_link: "https://github.com/topics/swing-gui" }
    ]
  },
  {
    id: 3,
    name: "FragmentOfTheAbyss",
    description:
      "FragmentsOfTheAbyss is a small LibGDX game where the player embodies Hasodious the abyss closer.",
    latest_release_link:
      "https://github.com/sevi2000/FragmentOfTheAbyss/releases/tag/release-2024-12-28_17.47.48",
    download_link:
      "https://github.com/sevi2000/FragmentOfTheAbyss/releases/download/release-2024-12-28_17.47.48/core-.projectVersion.jar",
    image: "./fragment-of-the-abyss.png",
    repo_link: "https://github.com/sevi2000/FragmentOfTheAbyss",
    tags: [
      { tag_text: "java", tag_link: "https://github.com/topics/java" },
      { tag_text: "libgdx", tag_link: "https://github.com/topics/libgdx" },
      { tag_text: "libgdx-game", tag_link: "https://github.com/topics/libgdx-game" },
      { tag_text: "libgdxjam", tag_link: "https://github.com/topics/libgdxjam" }
    ]
  },
  {
    id: 4,
    name: "2048",
    description:
      "Simple reimplementation of the famous 2048 game using LibGDX framework",
    latest_release_link:
      "https://github.com/sevi2000/FragmentOfTheAbyss/releases/tag/release-2024-12-28_17.47.48",
    download_link:
      "https://github.com/sevi2000/FragmentOfTheAbyss/releases/download/release-2024-12-28_17.47.48/core-.projectVersion.jar",
    image: "./2048.gif",
    repo_link: "https://github.com/sevi2000/FragmentOfTheAbyss",
    tags: [
      { tag_text: "java", tag_link: "https://github.com/topics/java" },
      { tag_text: "libgdx", tag_link: "https://github.com/topics/libgdx" },
      { tag_text: "libgdx-game", tag_link: "https://github.com/topics/libgdx-game" },
      { tag_text: "libgdxjam", tag_link: "https://github.com/topics/libgdxjam" }
    ]
  },
  {
    id: 5,
    name: "Linux User space build",
    description:
      "Linux from scratch (student project)",
    latest_release_link:
      "https://github.com/sevi2000/FragmentOfTheAbyss/releases/tag/release-2024-12-28_17.47.48",
    download_link:
      "https://github.com/sevi2000/FragmentOfTheAbyss/releases/download/release-2024-12-28_17.47.48/core-.projectVersion.jar",
    image: "https://raw.githubusercontent.com/sevi2000/Linux-User-Space-build/refs/heads/main/icon.png",
    repo_link: "https://github.com/sevi2000/FragmentOfTheAbyss",
    tags: [
      { tag_text: "linux", tag_link: "https://github.com/topics/linux" },
      { tag_text: "gcc", tag_link: "https://github.com/topics/gcc" },
    ]
  },
  {
    id: 6,
    name: "Conway's game of life",
    description:
      "Simple simulation of the Conway's game of lifre using LibGDX framework",
    latest_release_link:
      "https://github.com/sevi2000/FragmentOfTheAbyss/releases/tag/release-2024-12-28_17.47.48",
    download_link:
      "https://github.com/sevi2000/FragmentOfTheAbyss/releases/download/release-2024-12-28_17.47.48/core-.projectVersion.jar",
    image: "./game_of_life.gif",
    repo_link: "https://github.com/sevi2000/FragmentOfTheAbyss",
    tags: [
      { tag_text: "java", tag_link: "https://github.com/topics/java" },
      { tag_text: "libgdx", tag_link: "https://github.com/topics/libgdx" },
      { tag_text: "libgdx-game", tag_link: "https://github.com/topics/libgdx-game" },
      { tag_text: "libgdxjam", tag_link: "https://github.com/topics/libgdxjam" }
    ]
  },
  {
    id: 7,
    name: "Connect Four",
    description:
      "Simple reimplementation of the connect four game",
    latest_release_link:
      "https://github.com/sevi2000/FragmentOfTheAbyss/releases/tag/release-2024-12-28_17.47.48",
    download_link:
      "https://github.com/sevi2000/FragmentOfTheAbyss/releases/download/release-2024-12-28_17.47.48/core-.projectVersion.jar",
    image: "./connect_four.gif",
    repo_link: "https://github.com/sevi2000/FragmentOfTheAbyss",
    tags: [
      { tag_text: "java", tag_link: "https://github.com/topics/java" },
      { tag_text: "libgdx", tag_link: "https://github.com/topics/libgdx" },
      { tag_text: "libgdx-game", tag_link: "https://github.com/topics/libgdx-game" },
      { tag_text: "libgdxjam", tag_link: "https://github.com/topics/libgdxjam" }
    ]
  },
];

export default projects;
