window.BENCHMARK_DATA = {
  "lastUpdate": 1742998248346,
  "repoUrl": "https://github.com/coinbase/cb-mpc",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "Arash-Afshar@users.noreply.github.com",
            "name": "Arash Afshar",
            "username": "Arash-Afshar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3e545471b7e44a4f1858c6729184d6d4cccd6f50",
          "message": "feat: first release (#3)",
          "timestamp": "2025-03-21T10:42:58-06:00",
          "tree_id": "a14267dcc1c4572d5df58c559399a4a0ec47d107",
          "url": "https://github.com/coinbase/cb-mpc/commit/3e545471b7e44a4f1858c6729184d6d4cccd6f50"
        },
        "date": 1742577984465,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ZK/Batch-DL/Prover/3/1",
            "value": 1351.798817120242,
            "unit": "us/iter",
            "extra": "iterations: 514\ncpu: 1351.3902140077823 us\nthreads: 1"
          },
          {
            "name": "ZK/Batch-DL/Prover/4/1",
            "value": 904.17071316843,
            "unit": "us/iter",
            "extra": "iterations: 767\ncpu: 904.0237170795307 us\nthreads: 1"
          },
          {
            "name": "UC-ZK / Batch-DL (n = 4) / secp256k1 / Prover",
            "value": 1721.8113292069618,
            "unit": "us/iter",
            "extra": "iterations: 404\ncpu: 1721.7313663366335 us\nthreads: 1"
          },
          {
            "name": "UC-ZK / Batch-DL (n = 4) / Ed25519 / Prover",
            "value": 1276.4132881038947,
            "unit": "us/iter",
            "extra": "iterations: 538\ncpu: 1276.3716449814128 us\nthreads: 1"
          },
          {
            "name": "UC-ZK / Batch-DL (n = 16) / secp256k1 / Prover",
            "value": 4041.232091952841,
            "unit": "us/iter",
            "extra": "iterations: 174\ncpu: 4040.8667701149443 us\nthreads: 1"
          },
          {
            "name": "UC-ZK / Batch-DL (n = 16) / Ed25519 / Prover",
            "value": 3672.857189744368,
            "unit": "us/iter",
            "extra": "iterations: 195\ncpu: 3672.5143897435883 us\nthreads: 1"
          },
          {
            "name": "UC-ZK / Batch-DL (n = 64) / secp256k1 / Prover",
            "value": 12358.525754383696,
            "unit": "us/iter",
            "extra": "iterations: 57\ncpu: 12357.72978947368 us\nthreads: 1"
          },
          {
            "name": "UC-ZK / Batch-DL (n = 64) / Ed25519 / Prover",
            "value": 11809.25924590618,
            "unit": "us/iter",
            "extra": "iterations: 61\ncpu: 11809.134737704908 us\nthreads: 1"
          },
          {
            "name": "ZK/Batch-DL/Verify/3/1",
            "value": 1452.6645684648154,
            "unit": "us/iter",
            "extra": "iterations: 482\ncpu: 1452.6519170124466 us\nthreads: 1"
          },
          {
            "name": "ZK/Batch-DL/Verify/4/1",
            "value": 4880.87698601442,
            "unit": "us/iter",
            "extra": "iterations: 143\ncpu: 4880.512629370631 us\nthreads: 1"
          },
          {
            "name": "UC-ZK / Batch-DL (n = 4) / secp256k1 / Verifier",
            "value": 2282.8688827355113,
            "unit": "us/iter",
            "extra": "iterations: 307\ncpu: 2282.4273257329014 us\nthreads: 1"
          },
          {
            "name": "UC-ZK / Batch-DL (n = 4) / Ed25519 / Verifier",
            "value": 11811.809067794611,
            "unit": "us/iter",
            "extra": "iterations: 59\ncpu: 11811.693491525422 us\nthreads: 1"
          },
          {
            "name": "UC-ZK / Batch-DL (n = 16) / secp256k1 / Verifier",
            "value": 5608.733857141286,
            "unit": "us/iter",
            "extra": "iterations: 126\ncpu: 5608.291047619043 us\nthreads: 1"
          },
          {
            "name": "UC-ZK / Batch-DL (n = 16) / Ed25519 / Verifier",
            "value": 38106.80155553806,
            "unit": "us/iter",
            "extra": "iterations: 18\ncpu: 38105.912444444475 us\nthreads: 1"
          },
          {
            "name": "UC-ZK / Batch-DL (n = 64) / secp256k1 / Verifier",
            "value": 28084.400679999817,
            "unit": "us/iter",
            "extra": "iterations: 25\ncpu: 28083.295200000008 us\nthreads: 1"
          },
          {
            "name": "UC-ZK / Batch-DL (n = 64) / Ed25519 / Verifier",
            "value": 213130.17533323847,
            "unit": "us/iter",
            "extra": "iterations: 3\ncpu: 213119.25733333346 us\nthreads: 1"
          },
          {
            "name": "ZK (Interactive) / Valid-Paillier / Verifier's Challenge (1st round)",
            "value": 0.5126282483751701,
            "unit": "us/iter",
            "extra": "iterations: 1377304\ncpu: 0.5125914402339636 us\nthreads: 1"
          },
          {
            "name": "ZK (Interactive) / Valid-Paillier / Prover Message (2nd round)",
            "value": 9762.433638886452,
            "unit": "us/iter",
            "extra": "iterations: 72\ncpu: 9762.131874999981 us\nthreads: 1"
          },
          {
            "name": "ZK (Interactive) / Valid-Paillier / Final Verification",
            "value": 9223.985973682446,
            "unit": "us/iter",
            "extra": "iterations: 76\ncpu: 9223.55776315791 us\nthreads: 1"
          },
          {
            "name": "ZK (Interactive) / Paillier-Zero / Prover's 1st Message (1st round)",
            "value": 33430.73452381196,
            "unit": "us/iter",
            "extra": "iterations: 21\ncpu: 33426.75400000011 us\nthreads: 1"
          },
          {
            "name": "ZK (Interactive) / Paillier-Zero / Verifier's Challenge (2nd round)",
            "value": 2.050901056225204,
            "unit": "us/iter",
            "extra": "iterations: 340931\ncpu: 2.0507104546081245 us\nthreads: 1"
          },
          {
            "name": "ZK (Interactive) / Paillier-Zero / Prover's 2nd Message (3rd round)",
            "value": 373.70964815757605,
            "unit": "us/iter",
            "extra": "iterations: 1981\ncpu: 373.70233266027077 us\nthreads: 1"
          },
          {
            "name": "ZK (Interactive) / Paillier-Zero / Final Verification (3rd round)",
            "value": 35248.98809998831,
            "unit": "us/iter",
            "extra": "iterations: 20\ncpu: 35248.328600000175 us\nthreads: 1"
          },
          {
            "name": "ZK (Interactive) / Two-Paillier-Equal / Prover's 1st Message (1st round)",
            "value": 35642.45800000663,
            "unit": "us/iter",
            "extra": "iterations: 20\ncpu: 35637.28745000034 us\nthreads: 1"
          },
          {
            "name": "ZK (Interactive) / Two-Paillier-Equal / Verifier's Challenge (2nd round)",
            "value": 0.6002795627313335,
            "unit": "us/iter",
            "extra": "iterations: 1177217\ncpu: 0.6002314237731746 us\nthreads: 1"
          },
          {
            "name": "ZK (Interactive) / Two-Paillier-Equal / Prover's 2nd Message (3rd round)",
            "value": 705.8245748746446,
            "unit": "us/iter",
            "extra": "iterations: 995\ncpu: 705.7626964824316 us\nthreads: 1"
          },
          {
            "name": "ZK (Interactive) / Two Paillier Equal / Final Verification (3rd round)",
            "value": 73606.34533334733,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 73599.76177777917 us\nthreads: 1"
          },
          {
            "name": "ZK (Interactive) / Range-Pedersen / secp256k1 / Prover's 1st Message (1st round)",
            "value": 132163.7981999629,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 132150.09179999697 us\nthreads: 1"
          },
          {
            "name": "ZK (Interactive) / Range-Pedersen / Ed25519 / Prover's 1st Message (1st round)",
            "value": 130386.09149998592,
            "unit": "us/iter",
            "extra": "iterations: 4\ncpu: 130377.81899999602 us\nthreads: 1"
          },
          {
            "name": "ZK (Interactive) / Range-Pedersen / secp256k1 / Verifier's Challenge (2nd round)",
            "value": 0.5230987173813614,
            "unit": "us/iter",
            "extra": "iterations: 1347088\ncpu: 0.5230535458707839 us\nthreads: 1"
          },
          {
            "name": "ZK (Interactive) / Range-Pedersen / Ed25519 / Verifier's Challenge (2nd round)",
            "value": 0.527717019044836,
            "unit": "us/iter",
            "extra": "iterations: 1334740\ncpu: 0.5276733895739965 us\nthreads: 1"
          },
          {
            "name": "ZK (Interactive) / Range-Pedersen / secp256k1 / Prover's 2nd Message (3rd round)",
            "value": 6.060306147473143,
            "unit": "us/iter",
            "extra": "iterations: 111737\ncpu: 6.060127558462999 us\nthreads: 1"
          },
          {
            "name": "ZK (Interactive) / Range-Pedersen / Ed25519 / Prover's 2nd Message (3rd round)",
            "value": 5.372523337156813,
            "unit": "us/iter",
            "extra": "iterations: 122080\ncpu: 5.372185042595146 us\nthreads: 1"
          },
          {
            "name": "ZK (Interactive) / Range-Pedersen / secp256k1 / Final Verification (3rd round)",
            "value": 5.348481562734766,
            "unit": "us/iter",
            "extra": "iterations: 111676\ncpu: 5.348367867760377 us\nthreads: 1"
          },
          {
            "name": "ZK (Interactive) / Range-Pedersen / Ed25519 / Final Verification (3rd round)",
            "value": 6.129886841318316,
            "unit": "us/iter",
            "extra": "iterations: 123561\ncpu: 6.12932250467367 us\nthreads: 1"
          },
          {
            "name": "ZK (Interactive) / Paillier-Pedersen-Equal / secp256k1 / Prover's 1st Message (1st round)",
            "value": 20441.156617647826,
            "unit": "us/iter",
            "extra": "iterations: 34\ncpu: 20439.288794117474 us\nthreads: 1"
          },
          {
            "name": "ZK (Interactive) / Paillier-Pedersen-Equal / Ed25519 / Prover's 1st Message (1st round)",
            "value": 20490.68788235619,
            "unit": "us/iter",
            "extra": "iterations: 34\ncpu: 20489.12388235217 us\nthreads: 1"
          },
          {
            "name": "ZK (Interactive) / Paillier-Pedersen-Equal / secp256k1 / Verifier's Challenge (2nd round)",
            "value": 0.6572899441060124,
            "unit": "us/iter",
            "extra": "iterations: 1072386\ncpu: 0.6572515679988472 us\nthreads: 1"
          },
          {
            "name": "ZK (Interactive) / Paillier-Pedersen-Equal / Ed25519 / Verifier's Challenge (2nd round)",
            "value": 0.6601548420294191,
            "unit": "us/iter",
            "extra": "iterations: 1072732\ncpu: 0.6599951917161112 us\nthreads: 1"
          },
          {
            "name": "ZK (Interactive) / Paillier-Pedersen-Equal / secp256k1 / Prover's 2nd Message (3rd round)",
            "value": 354.9144390243934,
            "unit": "us/iter",
            "extra": "iterations: 1968\ncpu: 354.8991305894329 us\nthreads: 1"
          },
          {
            "name": "ZK (Interactive) / Paillier-Pedersen-Equal / Ed25519 / Prover's 2nd Message (3rd round)",
            "value": 353.22379716020595,
            "unit": "us/iter",
            "extra": "iterations: 1972\ncpu: 353.18531135903663 us\nthreads: 1"
          },
          {
            "name": "ZK (Interactive) / Paillier-Pedersen-Equal / secp256k1 / Final Verification (3rd round)",
            "value": 43720.124999993,
            "unit": "us/iter",
            "extra": "iterations: 16\ncpu: 43709.06487500292 us\nthreads: 1"
          },
          {
            "name": "ZK (Interactive) / Paillier-Pedersen-Equal / Ed25519 / Final Verification (3rd round)",
            "value": 43824.69750001405,
            "unit": "us/iter",
            "extra": "iterations: 16\ncpu: 43819.967000001016 us\nthreads: 1"
          },
          {
            "name": "UC-ZK / DL / secp256k1 / Prover",
            "value": 988.1421148457478,
            "unit": "us/iter",
            "extra": "iterations: 714\ncpu: 987.7668207282967 us\nthreads: 1"
          },
          {
            "name": "UC-ZK / DL / Ed25519 / Prover",
            "value": 659.0842318701107,
            "unit": "us/iter",
            "extra": "iterations: 1048\ncpu: 659.0112690840077 us\nthreads: 1"
          },
          {
            "name": "UC-ZK / DL / secp256k1 / Verifier",
            "value": 764.5322934778327,
            "unit": "us/iter",
            "extra": "iterations: 920\ncpu: 764.4767891304498 us\nthreads: 1"
          },
          {
            "name": "UC-ZK / DL / Ed25519 / Verifier",
            "value": 3499.230709999211,
            "unit": "us/iter",
            "extra": "iterations: 200\ncpu: 3498.895649999838 us\nthreads: 1"
          },
          {
            "name": "ZK / DH / secp256k1 / Prover",
            "value": 77.58562093301178,
            "unit": "us/iter",
            "extra": "iterations: 9067\ncpu: 77.58297342009658 us\nthreads: 1"
          },
          {
            "name": "ZK / DH / secp256k1 / Verifier",
            "value": 140.06899465132278,
            "unit": "us/iter",
            "extra": "iterations: 5048\ncpu: 140.06331834389587 us\nthreads: 1"
          },
          {
            "name": "ZK/ElGamalCom/Prover/3",
            "value": 2787.4992929692867,
            "unit": "us/iter",
            "extra": "iterations: 256\ncpu: 2774.7881289061916 us\nthreads: 1"
          },
          {
            "name": "ZK/ElGamalCom/Verify/3",
            "value": 1081.5589525995254,
            "unit": "us/iter",
            "extra": "iterations: 654\ncpu: 1081.0570733944735 us\nthreads: 1"
          },
          {
            "name": "ZK / ElGamal-PubShare-Equal / secp256k1 / Prover",
            "value": 77.99618101913356,
            "unit": "us/iter",
            "extra": "iterations: 8988\ncpu: 77.98696806853651 us\nthreads: 1"
          },
          {
            "name": "ZK / ElGamal-PubShare-Equal / secp256k1 / Verifier",
            "value": 145.3951466448871,
            "unit": "us/iter",
            "extra": "iterations: 4903\ncpu: 145.384728329597 us\nthreads: 1"
          },
          {
            "name": "ZK/ElGamalComMult/Prover/3",
            "value": 258.7005301645949,
            "unit": "us/iter",
            "extra": "iterations: 2735\ncpu: 258.6695970749474 us\nthreads: 1"
          },
          {
            "name": "ZK/ElGamalComMult/Verify/3",
            "value": 366.81592891234044,
            "unit": "us/iter",
            "extra": "iterations: 1885\ncpu: 366.788010610067 us\nthreads: 1"
          },
          {
            "name": "ZK/UCElGamalComMultPrivScalar/Prover/3",
            "value": 4236.283221558268,
            "unit": "us/iter",
            "extra": "iterations: 167\ncpu: 4235.770502993987 us\nthreads: 1"
          },
          {
            "name": "ZK/UCElGamalComMultPrivScalar/Verify/3",
            "value": 996.1362002967924,
            "unit": "us/iter",
            "extra": "iterations: 674\ncpu: 996.0286409495515 us\nthreads: 1"
          },
          {
            "name": "ZK / Valid-Paillier / Prover",
            "value": 23499.510166675467,
            "unit": "us/iter",
            "extra": "iterations: 30\ncpu: 23497.7549000007 us\nthreads: 1"
          },
          {
            "name": "ZK / Valid-Paillier / Verifier",
            "value": 22511.67154839007,
            "unit": "us/iter",
            "extra": "iterations: 31\ncpu: 22510.57435483972 us\nthreads: 1"
          },
          {
            "name": "ZK / Paillier-Zero / Prover",
            "value": 92696.3419999538,
            "unit": "us/iter",
            "extra": "iterations: 8\ncpu: 92688.45837499385 us\nthreads: 1"
          },
          {
            "name": "ZK / Paillier-Zero / Verifier",
            "value": 88063.24557144762,
            "unit": "us/iter",
            "extra": "iterations: 7\ncpu: 88054.87871428243 us\nthreads: 1"
          },
          {
            "name": "ZK / Two-Paillier-Equal / Prover",
            "value": 90853.99050002251,
            "unit": "us/iter",
            "extra": "iterations: 8\ncpu: 90847.5287499968 us\nthreads: 1"
          },
          {
            "name": "ZK / Two-Paillier-Equal / Verifier",
            "value": 183345.55850003654,
            "unit": "us/iter",
            "extra": "iterations: 4\ncpu: 183335.32849999302 us\nthreads: 1"
          },
          {
            "name": "ZK / Range-Pedersen / secp256k1 / Prover",
            "value": 331696.0839999865,
            "unit": "us/iter",
            "extra": "iterations: 2\ncpu: 331683.7129999897 us\nthreads: 1"
          },
          {
            "name": "ZK / Range-Pedersen / secp256k1 / Verifier",
            "value": 17485.402975000852,
            "unit": "us/iter",
            "extra": "iterations: 40\ncpu: 17485.254275000272 us\nthreads: 1"
          },
          {
            "name": "ZK / Paillier-Pedersen-Equal / secp256k1 / Prover",
            "value": 48062.98046666294,
            "unit": "us/iter",
            "extra": "iterations: 15\ncpu: 48061.27326666759 us\nthreads: 1"
          },
          {
            "name": "ZK / Paillier-Pedersen-Equal / secp256k1 / Verifier",
            "value": 100172.83457143223,
            "unit": "us/iter",
            "extra": "iterations: 7\ncpu: 100164.96528572004 us\nthreads: 1"
          },
          {
            "name": "ZK / Paillier-Range-Exp-Slack / secp256k1 / Prover",
            "value": 383100.7339999814,
            "unit": "us/iter",
            "extra": "iterations: 2\ncpu: 383069.5450000121 us\nthreads: 1"
          },
          {
            "name": "ZK / Paillier-Range-Exp-Slack / secp256k1 / Verifier",
            "value": 116906.38016663493,
            "unit": "us/iter",
            "extra": "iterations: 6\ncpu: 116904.79616666494 us\nthreads: 1"
          },
          {
            "name": "ZK / PDL / Prover",
            "value": 388428.89799980185,
            "unit": "us/iter",
            "extra": "iterations: 2\ncpu: 388316.602499998 us\nthreads: 1"
          },
          {
            "name": "ZK / PDL / Verifier",
            "value": 127211.41120000537,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 127199.0196000047 us\nthreads: 1"
          },
          {
            "name": "ZK / Unknown-Order-DL / Prover",
            "value": 297357.9649999465,
            "unit": "us/iter",
            "extra": "iterations: 2\ncpu: 297334.68899999594 us\nthreads: 1"
          },
          {
            "name": "ZK / Unknown-Order-DL / Verifier",
            "value": 298865.9284999358,
            "unit": "us/iter",
            "extra": "iterations: 2\ncpu: 298847.15150001284 us\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Arash-Afshar@users.noreply.github.com",
            "name": "Arash Afshar",
            "username": "Arash-Afshar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dc7ce2156cfc61366a0f5f70761dacf22a35008b",
          "message": "chore: cleanup (#5)\n\n* fix: properly publish commit in benchmark page\n* feat: support go 1.24\n* chore: remove unused local variables",
          "timestamp": "2025-03-26T07:27:31-06:00",
          "tree_id": "ba26a2b6e0ce54b406c4d6ccc73b19506060313a",
          "url": "https://github.com/coinbase/cb-mpc/commit/dc7ce2156cfc61366a0f5f70761dacf22a35008b"
        },
        "date": 1742998247554,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ZK/Batch-DL/Prover/3/1",
            "value": 1366.831910679836,
            "unit": "us/iter",
            "extra": "iterations: 515\ncpu: 1366.6243203883496 us\nthreads: 1"
          },
          {
            "name": "ZK/Batch-DL/Prover/4/1",
            "value": 920.5036740835976,
            "unit": "us/iter",
            "extra": "iterations: 764\ncpu: 920.4007028795811 us\nthreads: 1"
          },
          {
            "name": "ZK/Batch-DL/Prover/3/4",
            "value": 1745.3602537690456,
            "unit": "us/iter",
            "extra": "iterations: 398\ncpu: 1745.142236180904 us\nthreads: 1"
          },
          {
            "name": "ZK/Batch-DL/Prover/4/4",
            "value": 1319.390558441606,
            "unit": "us/iter",
            "extra": "iterations: 539\ncpu: 1319.2824397031538 us\nthreads: 1"
          },
          {
            "name": "ZK/Batch-DL/Prover/3/16",
            "value": 4230.634053569594,
            "unit": "us/iter",
            "extra": "iterations: 168\ncpu: 4195.347136904763 us\nthreads: 1"
          },
          {
            "name": "ZK/Batch-DL/Prover/4/16",
            "value": 3764.013508107628,
            "unit": "us/iter",
            "extra": "iterations: 185\ncpu: 3724.5983135135134 us\nthreads: 1"
          },
          {
            "name": "ZK/Batch-DL/Prover/3/64",
            "value": 13113.980696427267,
            "unit": "us/iter",
            "extra": "iterations: 56\ncpu: 12935.983160714284 us\nthreads: 1"
          },
          {
            "name": "ZK/Batch-DL/Prover/4/64",
            "value": 12469.628105264475,
            "unit": "us/iter",
            "extra": "iterations: 57\ncpu: 12468.244298245607 us\nthreads: 1"
          },
          {
            "name": "ZK/Batch-DL/Verify/3/1",
            "value": 1465.101891539897,
            "unit": "us/iter",
            "extra": "iterations: 461\ncpu: 1465.0543644251607 us\nthreads: 1"
          },
          {
            "name": "ZK/Batch-DL/Verify/4/1",
            "value": 4924.355319149685,
            "unit": "us/iter",
            "extra": "iterations: 141\ncpu: 4923.862439716304 us\nthreads: 1"
          },
          {
            "name": "ZK/Batch-DL/Verify/3/4",
            "value": 2247.1249739407367,
            "unit": "us/iter",
            "extra": "iterations: 307\ncpu: 2246.529895765475 us\nthreads: 1"
          },
          {
            "name": "ZK/Batch-DL/Verify/4/4",
            "value": 11584.66066101675,
            "unit": "us/iter",
            "extra": "iterations: 59\ncpu: 11584.007118644078 us\nthreads: 1"
          },
          {
            "name": "ZK/Batch-DL/Verify/3/16",
            "value": 5572.750094487437,
            "unit": "us/iter",
            "extra": "iterations: 127\ncpu: 5572.183236220473 us\nthreads: 1"
          },
          {
            "name": "ZK/Batch-DL/Verify/4/16",
            "value": 38477.28122221067,
            "unit": "us/iter",
            "extra": "iterations: 18\ncpu: 38477.38050000002 us\nthreads: 1"
          },
          {
            "name": "ZK/Batch-DL/Verify/3/64",
            "value": 28684.194519992165,
            "unit": "us/iter",
            "extra": "iterations: 25\ncpu: 28683.199799999955 us\nthreads: 1"
          },
          {
            "name": "ZK/Batch-DL/Verify/4/64",
            "value": 214953.1696666903,
            "unit": "us/iter",
            "extra": "iterations: 3\ncpu: 214950.30133333337 us\nthreads: 1"
          },
          {
            "name": "ZK/ValidPaillier-Int/V1",
            "value": 0.5154145836531363,
            "unit": "us/iter",
            "extra": "iterations: 1368450\ncpu: 0.5153938375534355 us\nthreads: 1"
          },
          {
            "name": "ZK/ValidPaillier-Int/P2",
            "value": 10028.572624997245,
            "unit": "us/iter",
            "extra": "iterations: 72\ncpu: 10019.60219444441 us\nthreads: 1"
          },
          {
            "name": "ZK/ValidPaillier-Int/Verify",
            "value": 9247.133202703677,
            "unit": "us/iter",
            "extra": "iterations: 74\ncpu: 9245.776121621597 us\nthreads: 1"
          },
          {
            "name": "ZK/PaillierZero-Int/P1",
            "value": 35175.90747618929,
            "unit": "us/iter",
            "extra": "iterations: 21\ncpu: 35175.02952380963 us\nthreads: 1"
          },
          {
            "name": "ZK/PaillierZero-Int/V2",
            "value": 2.055867438279038,
            "unit": "us/iter",
            "extra": "iterations: 346201\ncpu: 2.0556462344129414 us\nthreads: 1"
          },
          {
            "name": "ZK/PaillierZero-Int/P3",
            "value": 355.4923449845743,
            "unit": "us/iter",
            "extra": "iterations: 1974\ncpu: 355.472268996961 us\nthreads: 1"
          },
          {
            "name": "ZK/PaillierZero-Int/Verify",
            "value": 35340.17305000816,
            "unit": "us/iter",
            "extra": "iterations: 20\ncpu: 35337.112300000226 us\nthreads: 1"
          },
          {
            "name": "ZK/TwoPaillierEqual-Int/P1",
            "value": 35768.440949982505,
            "unit": "us/iter",
            "extra": "iterations: 20\ncpu: 35764.078149999536 us\nthreads: 1"
          },
          {
            "name": "ZK/TwoPaillierEqual-Int/V2",
            "value": 0.6004863817165049,
            "unit": "us/iter",
            "extra": "iterations: 1186126\ncpu: 0.6004456685040208 us\nthreads: 1"
          },
          {
            "name": "ZK/TwoPaillierEqual-Int/P3",
            "value": 710.8907482378172,
            "unit": "us/iter",
            "extra": "iterations: 993\ncpu: 710.7995186304205 us\nthreads: 1"
          },
          {
            "name": "ZK/TwoPaillierEqual-Int/Verify",
            "value": 73904.17466664681,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 73890.00066666541 us\nthreads: 1"
          },
          {
            "name": "ZK/RangePedersenInt/P1/3",
            "value": 130097.1808000213,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 130078.2245999983 us\nthreads: 1"
          },
          {
            "name": "ZK/RangePedersenInt/P1/4",
            "value": 129991.18200004888,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 129980.63800000069 us\nthreads: 1"
          },
          {
            "name": "ZK/RangePedersenInt/V2/3",
            "value": 0.5157930519149808,
            "unit": "us/iter",
            "extra": "iterations: 1354330\ncpu: 0.5157257913507101 us\nthreads: 1"
          },
          {
            "name": "ZK/RangePedersenInt/V2/4",
            "value": 0.5191804962932564,
            "unit": "us/iter",
            "extra": "iterations: 1361413\ncpu: 0.519131089537121 us\nthreads: 1"
          },
          {
            "name": "ZK/RangePedersenInt/P3/3",
            "value": 5.996800687252094,
            "unit": "us/iter",
            "extra": "iterations: 109421\ncpu: 5.996504190237716 us\nthreads: 1"
          },
          {
            "name": "ZK/RangePedersenInt/P3/4",
            "value": 6.0000628916176995,
            "unit": "us/iter",
            "extra": "iterations: 128952\ncpu: 5.999617066815639 us\nthreads: 1"
          },
          {
            "name": "ZK/RangePedersenInt/Verify/3",
            "value": 6.493526569721187,
            "unit": "us/iter",
            "extra": "iterations: 132858\ncpu: 6.492985676436637 us\nthreads: 1"
          },
          {
            "name": "ZK/RangePedersenInt/Verify/4",
            "value": 6.13474625387332,
            "unit": "us/iter",
            "extra": "iterations: 117121\ncpu: 6.1344457612212215 us\nthreads: 1"
          },
          {
            "name": "ZK/PaillierPedersenEq-Int/P1/3",
            "value": 20689.835705886308,
            "unit": "us/iter",
            "extra": "iterations: 34\ncpu: 20688.483235294003 us\nthreads: 1"
          },
          {
            "name": "ZK/PaillierPedersenEq-Int/P1/4",
            "value": 20569.58458824203,
            "unit": "us/iter",
            "extra": "iterations: 34\ncpu: 20569.241500000397 us\nthreads: 1"
          },
          {
            "name": "ZK/PaillierPedersenEq-Int/V2/3",
            "value": 0.6432189360865818,
            "unit": "us/iter",
            "extra": "iterations: 1092232\ncpu: 0.6432002907807057 us\nthreads: 1"
          },
          {
            "name": "ZK/PaillierPedersenEq-Int/V2/4",
            "value": 0.6457990667235312,
            "unit": "us/iter",
            "extra": "iterations: 1086495\ncpu: 0.6457560688268038 us\nthreads: 1"
          },
          {
            "name": "ZK/PaillierPedersenEq-Int/P3/3",
            "value": 354.8970040921161,
            "unit": "us/iter",
            "extra": "iterations: 1955\ncpu: 354.88796470587675 us\nthreads: 1"
          },
          {
            "name": "ZK/PaillierPedersenEq-Int/P3/4",
            "value": 354.9499267919314,
            "unit": "us/iter",
            "extra": "iterations: 1967\ncpu: 354.92348500255895 us\nthreads: 1"
          },
          {
            "name": "ZK/PaillierPedersenEq-Int/Verifier/3",
            "value": 43564.1607500088,
            "unit": "us/iter",
            "extra": "iterations: 16\ncpu: 43560.29868750255 us\nthreads: 1"
          },
          {
            "name": "ZK/PaillierPedersenEq-Int/Verifier/4",
            "value": 43832.09118751097,
            "unit": "us/iter",
            "extra": "iterations: 16\ncpu: 43830.89374999827 us\nthreads: 1"
          },
          {
            "name": "ZK/DL/Prover/3",
            "value": 1009.265947218429,
            "unit": "us/iter",
            "extra": "iterations: 701\ncpu: 1003.7355435093131 us\nthreads: 1"
          },
          {
            "name": "ZK/DL/Prover/4",
            "value": 679.6346179018079,
            "unit": "us/iter",
            "extra": "iterations: 1039\ncpu: 674.7451780558266 us\nthreads: 1"
          },
          {
            "name": "ZK/DL/Verify/3",
            "value": 766.6025754611891,
            "unit": "us/iter",
            "extra": "iterations: 921\ncpu: 766.4196406080356 us\nthreads: 1"
          },
          {
            "name": "ZK/DL/Verify/4",
            "value": 3526.409065328258,
            "unit": "us/iter",
            "extra": "iterations: 199\ncpu: 3526.205683417218 us\nthreads: 1"
          },
          {
            "name": "ZK/DH/Prove/3",
            "value": 77.86106322979637,
            "unit": "us/iter",
            "extra": "iterations: 9078\ncpu: 77.85860321656973 us\nthreads: 1"
          },
          {
            "name": "ZK/DH/Verify/3",
            "value": 136.03550983504027,
            "unit": "us/iter",
            "extra": "iterations: 5033\ncpu: 136.02269421815777 us\nthreads: 1"
          },
          {
            "name": "ZK/ElGamalCom/Prover/3",
            "value": 2773.5207768925766,
            "unit": "us/iter",
            "extra": "iterations: 251\ncpu: 2773.2071195218105 us\nthreads: 1"
          },
          {
            "name": "ZK/ElGamalCom/Verify/3",
            "value": 1078.3302503960176,
            "unit": "us/iter",
            "extra": "iterations: 631\ncpu: 1078.0717290015739 us\nthreads: 1"
          },
          {
            "name": "ZK/ElGamalPubShareEqual/Prover/3",
            "value": 78.66593761140062,
            "unit": "us/iter",
            "extra": "iterations: 8976\ncpu: 78.65318415775552 us\nthreads: 1"
          },
          {
            "name": "ZK/ElGamalPubShareEqual/Verify/3",
            "value": 143.72626152917542,
            "unit": "us/iter",
            "extra": "iterations: 4944\ncpu: 143.71401334950536 us\nthreads: 1"
          },
          {
            "name": "ZK/ElGamalComMult/Prover/3",
            "value": 256.8532315558863,
            "unit": "us/iter",
            "extra": "iterations: 2738\ncpu: 256.83275310445174 us\nthreads: 1"
          },
          {
            "name": "ZK/ElGamalComMult/Verify/3",
            "value": 370.3247947504585,
            "unit": "us/iter",
            "extra": "iterations: 1905\ncpu: 370.2935585301822 us\nthreads: 1"
          },
          {
            "name": "ZK/UCElGamalComMultPrivScalar/Prover/3",
            "value": 4410.456417722747,
            "unit": "us/iter",
            "extra": "iterations: 158\ncpu: 4365.0794620252545 us\nthreads: 1"
          },
          {
            "name": "ZK/UCElGamalComMultPrivScalar/Verify/3",
            "value": 1003.5313926027617,
            "unit": "us/iter",
            "extra": "iterations: 703\ncpu: 1003.4213826458497 us\nthreads: 1"
          },
          {
            "name": "ZK/ValidPaillier/Prover",
            "value": 23551.80826666583,
            "unit": "us/iter",
            "extra": "iterations: 30\ncpu: 23551.109766664995 us\nthreads: 1"
          },
          {
            "name": "ZK/ValidPaillier/Verify",
            "value": 22640.522580654615,
            "unit": "us/iter",
            "extra": "iterations: 31\ncpu: 22638.157612902887 us\nthreads: 1"
          },
          {
            "name": "ZK/PaillierZero/Prover",
            "value": 92499.0817500202,
            "unit": "us/iter",
            "extra": "iterations: 8\ncpu: 92493.50300000003 us\nthreads: 1"
          },
          {
            "name": "ZK/PaillierZero/Verify",
            "value": 88021.11987500894,
            "unit": "us/iter",
            "extra": "iterations: 8\ncpu: 88014.2793750025 us\nthreads: 1"
          },
          {
            "name": "ZK/TwoPaillierEqual/Prover",
            "value": 91429.50875002498,
            "unit": "us/iter",
            "extra": "iterations: 8\ncpu: 91420.7781250056 us\nthreads: 1"
          },
          {
            "name": "ZK/TwoPaillierEqual/Verify",
            "value": 183933.01875005363,
            "unit": "us/iter",
            "extra": "iterations: 4\ncpu: 183921.128999998 us\nthreads: 1"
          },
          {
            "name": "ZK/RangePedersen/Prover/3",
            "value": 331735.25200004404,
            "unit": "us/iter",
            "extra": "iterations: 2\ncpu: 331731.3640000066 us\nthreads: 1"
          },
          {
            "name": "ZK/RangePedersen/Verify/3",
            "value": 17564.879325004767,
            "unit": "us/iter",
            "extra": "iterations: 40\ncpu: 17564.104649999026 us\nthreads: 1"
          },
          {
            "name": "ZK/PaillierPedersenEq/Prover/3",
            "value": 48343.51792858017,
            "unit": "us/iter",
            "extra": "iterations: 14\ncpu: 48336.75985714438 us\nthreads: 1"
          },
          {
            "name": "ZK/PaillierPedersenEq/Verify/3",
            "value": 99316.85142860911,
            "unit": "us/iter",
            "extra": "iterations: 7\ncpu: 99306.71442857277 us\nthreads: 1"
          },
          {
            "name": "ZK/PaillierRangeExpSlack/Prover/3",
            "value": 382602.2344999274,
            "unit": "us/iter",
            "extra": "iterations: 2\ncpu: 382568.2890000053 us\nthreads: 1"
          },
          {
            "name": "ZK/PaillierRangeExpSlack/Verify/3",
            "value": 119406.29999996115,
            "unit": "us/iter",
            "extra": "iterations: 6\ncpu: 119396.30266667223 us\nthreads: 1"
          },
          {
            "name": "ZK/PDL/Prover",
            "value": 389048.0649999972,
            "unit": "us/iter",
            "extra": "iterations: 2\ncpu: 389053.6064999992 us\nthreads: 1"
          },
          {
            "name": "ZK/PDL/Verify",
            "value": 127821.30839996171,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 127815.47719999935 us\nthreads: 1"
          },
          {
            "name": "ZK/UnknownOrderDL/Prove",
            "value": 302194.8610000891,
            "unit": "us/iter",
            "extra": "iterations: 2\ncpu: 302113.4894999875 us\nthreads: 1"
          },
          {
            "name": "ZK/UnknownOrderDL/Verify",
            "value": 299593.9410000119,
            "unit": "us/iter",
            "extra": "iterations: 2\ncpu: 299553.692499984 us\nthreads: 1"
          }
        ]
      }
    ]
  }
}