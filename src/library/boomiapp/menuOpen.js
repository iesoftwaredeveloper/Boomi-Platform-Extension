let opennewtabImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA9UAAAPWCAYAAADu3ruxAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAASAAAAEgARslrPgAAYd9JREFUeNrt3XecXHW9P/732ZJNb4SIgAHpXUBEKYKEmtACJHRRkKJBpTcRaddLUOpViqBwqUYMEAQSCClcCCBSFZCLfKnBgLQU0je75/fHdfNLQspsmT3nzD6fj4cPk02yeU3IZOc1r8+ZSdI0DQAAoHxmzpyZNjQ0ZB2jrOrq6qJr165J1jmgvdVkHQAgr5b1AKi+vj5mzZr1uZ87a9asqK+vX+JjDQ0NMXPmzM/93NmzZ8eCBQuW+FhjY2PMmDFjpZmmT58epTwZOm3atJX+nDRNY/r06W3281qTpVRz5syJ+fPnt8nnWt5/n0o0c+bMqPQH863lzwjaTLstdv8u8WX53D169IiamuVXpW7dukWnTp2W++OdO3eOLl26LPfHO3XqFN26dVvuj9fU1ESPHj2W+FiSJNG7d+9F3+/Tp88yv927d+9Ikv97bqNXr15RVVX1uW/37Nkzqqurl/j2v2+TJ0VaILFUA3mRpmk6ffr0mD17dsydOzdmzpwZs2bNijlz5sSsWbNi5syZMWfOnJgzZ84SD4BnzJgRjY2NEbFk6Wwqc4uXwsXL6+KlqiMVLACAZamqqopevXpFt27dokuXLtGzZ8/o3r17dOnSJfr27RurrLLK5/5/9dVXjzXXXDP69u3bYQu5Ug2UXZqm6auvvhovvfRSvPLKKzF16tT48MMP48MPP4yPPvoopk2bFnPnzo158+ZlHRUAgBbo1q1brLXWWjFgwIDYfPPNY7PNNovNN988Nt9886ipqanowq1UA2Uxe/bsdNy4cTFmzJh48MEH4/333886EgAA7axbt26xww47xM477xx77bVXbLXVVpE0nU+vEEo10GYWLFiQjhkzJm677bZ48MEH2+zaVwAAKsMaa6wR++yzTwwdOjS+9a1vVcSKrVQDrfbSSy+l119/ffzhD3+ITz75JOs4AAAUQL9+/eLAAw+MYcOGxS677BLV1dWFLNhKNdAijY2N6YMPPhj/9V//FRMmTCjpFakBAGBZvvjFL8ZRRx0Vxx13XKy77rqFKtdKNdAsCxYsSG+++eYYMWJEvP3221nHAQCgglRVVcXAgQPj1FNPjb322qsQ118r1UBJFixYkN50001xySWXxLvvvpt1HAAAKtyWW24ZZ511VgwbNizXR8OVamCF0jRN77rrrjj77LMt0wAAtLstttgirrrqqthll11yWayVamC5/vKXv6SnnHJKPPnkk1lHAQCggzvooIPiiiuuiAEDBuSqXCvVwOdMmzYtPf300+Pmm2/2AmQAAORGz54941e/+lUcddRRuSnWSjWwhFGjRqU/+tGP4oMPPsg6CgAALNPQoUPj+uuvj1VWWSXzcq1UAxER8dFHH6UnnHBC3HvvvVlHAQCAlVp77bVj9OjR8ZWvfCXTYl2V9R8EkL2JEyemW265pUINAEBhvP322/GNb3wjbr/99kyXYqUaOrAFCxakZ555Zrr77rvH1KlTs44DAADNMm/evDjqqKPi/PPPT9OMjmE7/g0d1EcffZQefPDB8eijj2YdBQAAWu2oo46K3/72t1FbW9uux8GVauiAXnjhhfSAAw6Id955J+soAADQZvbZZ5/4wx/+EF27dm23Yu34N3Qwt99+e7r99tsr1AAAVJwHHnggdtttt/j000/bbT1WqqEDufrqq9Ojjjoq5s2bl3UUAAAoi6eeeip23HHHmDp1arsUa6UaOoA0TdPTTz89Pfnkk8MlHwAAVLpXX301Bg4cGO+9917ZH/y6phoqXH19fXrEEUfEH//4x6yjAABAu1p33XVj/Pjxsfbaa5ftGmulGipYfX19esghh3j/aQAAOqwBAwbEhAkTYr311itLsVaqoUIp1AAA8H/WXHPNeOyxx+LLX/5ymxdr11RDBWpoaEgPPfRQhRoAACLivffei912260s11gr1VCBTj755LjnnnuyjgEAALnx5ptvxsCBA+P9999v02KtVEOFOf/889Nf//rXWccAAIDcef3112OPPfaIjz/+uM2KtWuqoYLccMMN6QknnJB1DAAAyLWvfe1rMXHixOjevXurr7FWqqFCPPHEE+nAgQNjwYIFWUcBAIDcGzhwYIwZMybq6upaVawd/4YKMGXKlPTAAw9UqAEAoEQTJ06M7373u9HY2NiqpVmphoKbN29eeuCBB8aHH36YdRQAACiUkSNHxllnndWqz6FU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hsxYqiFHLNVApXn22WfTQw45xJOGQNl8/PHHseeee3rxMjKlVENOKNVAJfnkk0/SoUOHesssoOymTJkSe+65Z3zyySeKNe3OUg05olQDleS73/1uvPPOO1nHADqIV199NQ4//PBobGxUrGl3SjXkhOORQKX47W9/mz7wwANZxwA6mHHjxsUll1ySdQw6IKUacsJSDVSCqVOnpqeddlrWMYAO6vzzz49HH33UWk27cfwbckSpBirBT37yk5g5c2bWMYAOqqGhIQ4//PCYNm2aYk27UaohJxz/Boru2WefTW+77basYwAd3Pvvvx9nn3121jHoICzVkCOWaqDoLrroomhsbMw6BkD89re/jSeeeMJaTbtQqiEnlGqgyP761796cTIgNxobG+MHP/hB1NfXK9aUlaUackSpBors6quvjjT12BXIj5deeimuvPLKrGPQASjVkBOuqQaKasaMGeldd92VdQyAz7nwwgvjzTff9IwfZWOphhyxVANFNXLkyJg9e3bWMQA+Z86cOfGjH/0o6xhUOKUackKpBorKSg3k2ZgxY2LUqFHWaspGqYacUKqBIvrkk0/Sxx57LOsYACt0yimnZB2BCuX4N+SIa6qBIpowYYJ/v4Dcmzp1atYRqGBKNeSEpRoookcffTTrCAAr1djYmHUEKpSlGnJEqQaK6Iknnsg6AkBJUu/7R5ko1ZATSjVQNAsWLEj/93//N+sYACXRqSkHSzXkiGsSgaL53//931iwYEHWMQBK4gg45aJUQ05YqoGieeONN7KOAFAySzXlolRDTijVQNFMmTIl6wgAJVOqKQfHvyFHlGqgaD744IOsIwCUzPFvykWphpxwTTVQNDNnzsw6AkDJLNWUg6UacsRSDRTNrFmzso4AUDJLNeWiVENOKNVA0fh3CygSSzXlYKmGHHH8Gyia2trarCMAlEypplyUasgJiw9QNHV1dVlHACiZ49+Ug6UackSpBoqmX79+WUcAKJmlmnJRqiEnlGqgaFZdddWsIwCUzFJNuSjVkBOuqQaKZsCAAVlHACiZpZpycPwbcsRSDRTNRhttlHUEgJIp1ZSLUg05oVQDRbPuuutGp06dso4BUBLHvykHSzXkiFINFE1tbW2y5ZZbZh0DoCSWaspFqYacUKqBItpuu+2yjgBQEks15WCphhzxQmVAEe28885ZRwAoiVJNuSjVkBP+oQeKaPfdd4+6urqsYwBAJizVkCOWaqCIunfvnnzrW9/KOgbASrnUjnJIkkSphrzwDz1QVIcffnjWEQAgM0o15ISlGiiqgw46KHr06JF1DIAVcqkd5aJUQ05YqoGi6tatW3LkkUdmHQNghZRqykWphpxQqoEiO/3006O6ujrrGADL5X2qKQfXVEOOKNVAka2zzjrJgQcemHUMgOWyVFMuSjXkhGuqgaL7j//4j6itrc06BgC0K6UacsJSDRTdBhtskBxzzDFZxwBYJks15aJUQ04o1UAl+PnPfx79+/fPOgbA57immnJwTTXkiOPfQCVYZZVVkiuuuCLrGACfY6mmXJRqyAlLNVApjjjiiGTo0KFZxwBYglJNuSjVkBNKNVBJfvvb38Y666yTdQyARRz/plyUasgJpRqoJL169Ur++Mc/Rrdu3bKOAhARlmrKwzXVkCOuqQYqzdZbb53cddddUV1dnXUUACgbpRpywlINVKLBgwcn11xzTSRJknUUoIOzVFMuSjXkhFINVKoTTjghueGGG6KqysMOIDuuqaZcfHWDnFCqgUp27LHHJjfccEPU1NRkHQXooCzVlINrqiFHXFMNVLrvfe97ydixY6NXr15ZRwE6IEs15aJUQ05YqoGOYLfddkueeOKJ2GSTTbKOAnQwlmrKRamGnFCqgY5i0003TZ555pk4+uijs44CdCCWaspFqYacUKqBjqRr167JTTfdlDz44IOx1lprZR0H6ACUasrBNdWQI66pBjqiwYMHJy+99FKceuqpUVdXl3UcoII5/k25KNWQE5ZqoKPq0aNHcvnllyevv/56HH/88VFdXZ11JKACWaopF6UackKpBjq6L33pS8lvfvOb5B//+Ef85Cc/iQ022CDrSEAFsVRTLt4sEnJCqQb4P+uss07y85//PH7+85/HW2+9lT733HPx4osvxl//+tf461//GlOmTMk6IlBASjXlkCSJUg154ZpqgM/78pe/nHz5y1+OoUOHLvrYggUL0g8//DCmTp0a//rXv+Jf//pXTJ06NT766KOYNWtWzJ49O6ZPnx5z586NuXPnxrRp02LOnDkxd+7cmDFjRtY3CciI49+Ui1JNrkyfPj1d+h+8zz777HOFc+7cuTFv3rwlPrZgwYKYPXv2Eh9rbGxc5gOoGTNmfO7ZylmzZkV9ff0SH5s3b17MnTt3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hRIcfPDBcccddyjUFUipbh6lmnKwVAMAzaJQF4tCXdmU6uZRqikXpRoAKMlzzz2X7rrrrvHpp59mHYUSHH744Y58Vziv/t08SjXl4C21AICSvPjii+kee+wR06dPzzoKJTjyyCPj1ltvjerqaoW6glmqm0epplws1QDACr300kvp7rvvbqEuiEMPPTRuvvlmhboDUKqbp0uXLllHoAJZqgGAFXrttdfSPfbYIz7++OOso1CCww47LG6//XZHvjsIpbp5lGrKxVINACzTP/7xj3SXXXaJDz74IOsolOCYY46J22+/3ULdgVRXVyfV1dVZxygMpZpysFQDAMv0+uuvp7vssku8//77WUehBN/73vfixhtvjKqqKoW6g1EUS9e5c+esI1ChLNUAwBLeeeeddPfdd4+pU6dmHYUSfO9734sbbrhBoe6gunXrlnWEwujatWvWEahAlmoAYAnvvvtuussuu8Q777yTdRRKcOyxxyrUHVz37t2zjlAYVn3KYVGptlQDAFOmTEl32WWXeOutt7KOQgmOO+64+M1vfqNQd3BKdWmqqqqiU6dO7iuUhaUaAIj33nsv3WWXXeLNN9/MOgolOP744xVqIiKiR48eWUcoBNdTUy6WagAg/vWvf6V77LFHvPHGG1lHoQQnnHBCXH/99ZEkiUKNpbpEjn5TTpZqAOjAPvzww3TgwIHx6quvZh2FEnz/+9+P6667TqFmEaW6NEo15WKpBoAO7KOPPkoHDhwYf//737OOQglOPvnkuPbaaxVqlqBUl8afE+VUE6FUA0BHM3369HSvvfaKV155JesolOCUU06JK664Qpnmc5TF0vTp0yfrCFQob6kFAB3QtGnT0oEDB8bzzz+fdRRKcPrppyvULJcXKitNr169so5ABXP8GwA6kBkzZqR77rlnvPDCC1lHoQSnnXZa/PKXv1SoWa7+/ftnHaEQ+vbtm3UEKpSlGgA6kJkzZ6Z77rlnPPPMM1lHoQSnn356XHbZZQo1K/SFL3wh6wiF0Lt376wjUMEs1QDQAcyePTvdd9994+mnn846CiU444wzLNSUZLXVVss6QiEo1ZSLpRoAOoA5c+ak++yzTzz22GNZR6EEZ555ZvziF79QqCmJUl0apZpyslQDQAVrKtSPPvpo1lEowc9+9rO49NJLFWpKplSXZtVVV806AhXKUg0AFWz+/PnpsGHDYtKkSVlHoQRnnXVWXHjhhQo1zdK7d++oq6vLOkburbPOOllHoEItKtWWagCoLPPnz0+HDBkSY8aMyToKJbjoootixIgRCjXNliRJsvbaa2cdI/eUasrJUg0AFaa+vj49+OCD46GHHso6CiW48MIL47zzzlOoabEtt9wy6wi51rlz51h99dWzjkGFslQDQIVZuHBhevjhh8ef/vSnrKNQgv/8z/+Mn/3sZwo1rfKVr3wl6wi59pWvfCWqqqrczygbSzUAVIjGxsb06KOPjlGjRmUdhRJcfPHFcc4553igT6tZqlds2LBhWUeggiVJEjURlmoAKLo0TdPjjjsubr/99qyjUIJLL700zjzzTIWaNrHVVltFkiQe0y9DkiQxdOjQrGNQ4Rz/BoCCS9M0PfHEE+Omm27KOgoluOyyyxRq2tRqq62WOAK+bDvssEOstdZa7m+UjbfUAoAKcNppp8V1112XdQxKcPnll8dpp53mAT5t7qCDDso6Qi6ddNJJWUegA7BUA0CBnXPOOemVV16ZdQxWIkmSuPLKK+PUU09VqCmLo48+OmpqarKOkSvrrrtuHHDAAVnHoMJZqgGgwC688MJ0xIgRWcdgJZIkiauuuipOPvlkhZqyWWONNZLvfve7WcfIlVNPPTWqq6vd7yg7SzUAFNCVV16ZXnDBBVnHYCWaCvWPf/xjD+wpuwsvvDC6du2adYxc2GijjeK4447LOgYdgKUaAAro6quvTk899dSsY7ASSZLEr3/9a4WadrP66qsnJ598ctYxcuGKK66I2tpa9z3ahaUaAArk+uuvT0855ZSsY7ASSZLEtddeG8OHD/egnnb105/+NDbYYIOsY2Rqn332iUGDBrnv0S4s1QBQILfcckt64oknejI855oW6u9///se1NPuunTpkvz3f/93VFdXZx0lE/369Ysbbrgh6xh0IItKtS/OAJBvo0aNSo899thobGzMOgor0FSoLdRkabvttktOPPHErGNk4rrrrosvfvGL7n+0K0s1AOTc3XffnR522GGxcOHCrKOwAlVVVXHjjTcq1OTCiBEj4utf/3rWMdrViSeeGEOHDnX/o11ZqgEg5x566KH0iCOOUKhzLkmSuOaaa+J73/ueB/TkQpcuXZLRo0fHgAEDso7SLvbcc8+46qqrso5BB2WpBoCceuSRR9IDDjgg5s+fn3UUVqCqqipuvvlm11CTO6uttloyduzY6NWrV9ZRymqTTTaJkSNHRk1Njfsg7c5SDQA5NWnSpHT//fePefPmZR2FFaiuro6bb745vvOd73gwTy5tsskmyahRoyr2/as32GCDGDduXPTu3dt9kMwo1QCQM3/+85/T/fbbL+bOnZt1FFaguro6brrppjjqqKM8mCfXdtttt+Thhx+Onj17Zh2lTW2wwQYxceLEWGONNdwHyYy31AKAnHnhhRfSQYMGxaxZs7KOwgpUV1fHrbfeqlBTGDvuuGMyfvz46Nu3b9ZR2sQWW2wRjz76qEJNLliqASAn/v73v6d77rlnTJ8+PesorEBNTU3cfvvtcfjhh3swT6F87WtfSx5//PHYYIMNso7SKvvuu29MnjzZW2eRC5ZqAMiJN954I919993jo48+yjoKK9BUqA899FAP5imkTTbZJHnmmWdiyJAhWUdptiRJ4swzz4zRo0dHjx493AfJDUs1AGRsypQp6W677RZTp07NOgorUFNTE3feeWcccsghHsxTaD179kzuueeeuOSSS6KmpibrOCVZbbXV4sEHH4xLL700qaqqch8kNyzVAJCxf/3rX+luu+0Wb7/9dtZRWIHa2tr4/e9/H8OGDfNgnoqQJEly9tlnJ3/5y19i6623zjrOCu2///7xt7/9LQYNGuT+Ry4p1QCQkenTp6eDBg2Kf/zjH1lHYQVqa2tj5MiRMXToUA/oqThbbbVV8vTTT8dVV10V3bt3zzrOEtZbb7246667YvTo0cmqq67q/kcueZ9qAMjIzJkz0z322CNeeOGFrKOwAp06dYq77rorDjzwQA/oqVg1NTXJSSedlLz88stxzDHHZH4kvF+/fnHppZfGyy+/7HQIhWCpBoB2Nnfu3HS//faLZ555JusorECnTp3iD3/4QwwZMsSDejqEtdZaK/nd736XvP7663H88ce3e7nu379/nH/++fHGG2/EmWeemdTV1bnvkXuWagBoZ/Pnz0+HDBkS//M//5N1FFagU6dOMWrUKIWaDmnttddOfvOb3ySvvfZanHvuubHmmmuW7feqrq6OQYMGxR/+8Id4991344ILLkh69uzpfkdheKEyAGhHCxcuTA899NAYN25c1lFYgbq6urj77rtj33339cCeDm2dddZJ/uM//iN5++23Y8yYMXHEEUfEaqut1urP27Vr1xg8eHD86le/infeeSfGjBmTHHzwwZZpCqsmwlINAOXW2NiYfuc734nRo0dnHYUVqKuri3vuuScGDx7swT38W3V1dTJo0KAYNGhQRET8/e9/TydOnBhPPfVUvPXWW/HWW2/FBx988LlfV1tbG6uuumqsvvrqscUWW8QWW2wRW265ZXz961+Pzp07u49REZIkiWK8MR0AFFiapun3v//9uPPOO7OOwgp07tw57r333thrr7082IcV2GSTTZJNNtkkfvjDHy762Ny5c9N58+ZFRMSsWbOie/fu0adPH/clOgRLNQCU2amnnho33nhj1jFYgc6dO8fo0aNjzz33VAKgBbp06ZJ06dIlIiL69OmTdRxoN16oDADK7KKLLkqvuuqqrGOwAl26dIn77rtPoQagRRz/BoAyue6669Lzzz8/6xisQNeuXeO+++6L3XbbTaEGoNkWXVNtqQaAtvX73/8+Xfx6Q/Kna9eucf/998fAgQMVagBazFtqAUAbGz9+fHr00UdHY2Nj1lFYjm7dusUDDzygUAPQKpZqAGhjTz/9dHrAAQfE/Pnzs47CcvTq1SvGjh0b2223nUINQKu5phoA2sjLL7+cDh48OGbNmpV1FJajd+/e8dBDD8XXv/51hRqAVrNUA0Abeeutt9I999wzPv3006yjsBy9e/eOhx9+OLbddluFGoA2Y6kGgFb66KOP0kGDBsXUqVOzjsJy9OnTJ8aNGxfbbLONQg1Am7FUA0ArzZw5M91zzz3jtddeyzoKy9G/f/8YP358bL755go1AG0qSRKv/g0ALTV37tx03333jRdeeCHrKCzHF77whZgwYYJCDUDZWKoBoAUaGhrSQw89NB577LGso7Aca6yxRkyYMCE23HBDhRqAslh0/BsAaJ5TTjkl/vSnP2Udg+X40pe+FBMnToz11ltPoQagrKoiLNUA0BxXXnll+qtf/SrrGCzHgAEDYtKkSQo1AGW36JpqpRoASvPggw+mZ5xxRtYxWI611lorJk2aFOuuu65CDUC7cPwbAEr03HPPpYccckg0NDRkHYVlWHvttWPSpEmx9tprK9QAtAtLNQCU6O2330733nvvmD17dtZRWIYNNtggJk+erFAD0O68pRYArMTMmTPT/fbbL/71r39lHYVl2GijjWLSpEmxxhprKNQAtCtLNQCsRENDQ3rQQQfFSy+9lHUUlmHzzTeP//mf/4nVV19doQYgE5ZqAFiBn/3sZzF+/PisY7AMW265ZUycODH69++vUAOQCUs1AKzAww8/nI4YMSLrGCzDV7/61ZgwYUL069dPoQYgU5ZqAFiGuXPnpsOHD4/Gxsaso7CUr371qzFu3Ljo27evQg1ApizVALAct99+e7z55ptZx2Ap2223XUyYMEGhBiAXFpVqAGBJd9xxR9YRWMo3v/nNePjhh6NXr14KNQC5YakGgKVMnTo1ffzxx7OOwWJ23nnnGDNmTPTo0UOhBiA3LNUAsAx33HGHa6lzZNCgQTF27Njo3r27Qg1A7liqAWApd999d9YR+LchQ4bE6NGjo0uXLgo1ALnjhcoAYCmzZs1Kn3vuuaxjEBEHH3xw3HXXXdGpUyeFGoDccvwbABYzefLkWLhwYdYxOrzDDjss7rjjjqitrVWoAcgtSzUALOWxxx7LOkKHd+yxx8btt98eNTU1CjUAuWepBoDFPPnkk1lH6NCGDx8eN9xwQ1RVVSnUAOSepRoAlvL6669nHaHDGj58ePz617+OJEkUagAKw1INAP82b9689P333886Rod05plnxjXXXJMo1AAUiaUaABbz1ltv+ZqYgbPOOisuvfRSZRqAQqrJOgAA5MW7776bdYQOZ8SIEXHWWWcp1AAUUpIk/1eqPSsPABHz58/POkKHkSRJXHHFFXHyyScr1AAU1qJSDQBENDY2Zh2hQ0iSJK6++ur40Y9+pFADUHiWagD4N6W6/Kqrq+OGG26IY445RqEGoPAs1QCwmKoqb4pRTjU1NXHLLbfE4YcfrlADUDEs1QDwb6uttlrWESpWbW1t3HnnnTF06FCFGoCK4YXKAGAxX/rSl7KOUJHq6upi5MiRMWTIEIUagIrj+DcA/Ntqq60WtbW1UV9fn3WUitGtW7e49957Y/fdd1eoAag4SZJEVYSlGgAiIqqrqxNrddvp3bt3PPLIIwo1ABXNK7IAwGK+/vWvZx2hIvTt2zcefvjh2G677RRqACqWpRoAlvLNb34z6wiFt9pqq8Wjjz4a2267rUINQMVzTTUALGannXbKOkKhrbXWWjF+/PhYb731FGoAKt6ipRoA+D+bbLJJ9O/fP+sYhbThhhvG5MmTFWoAOhTHvwFgMUmSJAcffHDWMQpnk002iUmTJsWaa66pUAPQYbimGgCW4dvf/nbWEQplm222icceeyy++MUvKtQAdDiOfwPAUrbddttko402yjpGIey0004xYcKEWGWVVRRqADocSzUALMdRRx2VdYTc22uvveKhhx6Knj17KtQAdEheqAwAlmP48OHRq1evrGPk1r777hv33ntvdOnSRaEGoEOzVAPAMvTq1Sv5/ve/n3WMXDr88MPjnnvuic6dOyvUAHRolmoAWIFTTz01unbtmnWMXBk+fHjcdtttUVNTo1ADQFiqAWC5+vfvnxx//PFZx8iN888/P6655pqkqqpKoQaA8EJlALBS5513XvTr1y/rGJlKkiQuv/zyuOCCC5RpAFiK498AsAJ9+/ZNLr744qxjZKampiZ+97vfxamnnqpQA8BSLNUAUILjjz8+ttlmm6xjtLuuXbvGfffdF0cffbRCDQDLYakGgJWoqqpK7rzzzujevXvWUdpN79694+GHH47Bgwcr1ACwHJZqACjR+uuvn1xxxRVZx2gXq622WkyaNCl23HFHhRoAVsJSDQAlOu6445LDDjss6xhltc4668TkyZNjyy23VKgBYCUs1QDQTDfddFPsuOOOWccoi0022SQee+yxWHfddRVqACiRpRoAmqFz587JfffdFxtttFHWUdrUjjvuGJMnT4411lhDoQaAElmqAaAF+vbtmzz88MOx/vrrZx2lTRx66KHxyCOPRJ8+fRRqAGiGRaUaAGieAQMGJI8//nhsueWWWUdplR//+Mdxxx13ROfOnRVqAGgBSzUAtNAXvvCFZOLEifGtb30r6yjNVltbGzfeeGNcffXVSVVVlUINAC1gqQaAVurTp08yfvz4OP/886OqqhhfVrt37x6jR4+OY489VpkGgFayVANAK1VXVycXXHBBMmrUqOjXr1/WcVZowIAB8eSTT8bgwYMVagBoJS9UBgBt6IADDkj+/ve/x5FHHpl1lGXaZptt4s9//nNsvvnmCjUAtJFinFMDgIJYddVVk9tuuy0ZN25crl7E7IQTTojJkyfHF7/4RYUaANqIpRoAymT33XdPnn/++Rg1alRsuummmeXo379/3HnnnXH99dcndXV1CjUAtDFLNQCUSZIkyUEHHZS89NJLMX78+Bg2bFh06tSpXX7vzTffPEaMGBGvvvpqHHbYYco0AJRBkiRRE2GpBoBySpIk2XXXXWPXXXeNDz/8MB09enQ88MADMWHChJgz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jgEAAB3O8q6lbuKaaiiAfv36JaecckrWMQAAoEPZbrvtYs8991zh0W5LNRTE6aef7n2rAQCgHf385z9f6c+xVENBdO/ePTnzzDOzjgEAAB3CPvvsE7vssstKX4BMqYYCOfHEE+NLX/pS1jEAAKCiVVVVxcUXX1zaz806LFC6zp07JxdccEHWMQAAoKIdeeSRseWWW5b0NlmuqYaCOfroo2OXXXbJOgYAAFSkTp06xfnnn1/yz/c+1VAwSZIkv/71r6NTp05ZRwEAgIpz6qmnxjrrrFNySbZUQwFtsskmyVlnnZV1DAAAqCjrr7/+St+XemlKNRTUueeeGxtvvHHWMQAAoCIkSRLXXXdddOnSpVlHuR3/hoKqq6tLrrnmGvdfAABoA8cee2zsuuuuzX5wbamGAttll12Sk08+OesYAABQaKuttlpceumlLfq13lILCm7EiBHx9a9/PesYAABQWNdee2306dOnRUdALdVQcJ06dUruuuuu6Nu3b9ZRAACgcE488cQ44IADWnxNpaUaKsCAAQOSW265xfXVAADQDNtuu21cfvnlrfocSjVUiH322Sf50Y9+lHUMAAAohFVWWSX++Mc/Rl1dXauWKaUaKshll10We+yxR9YxAAAg16qqquK2226LAQMGtPqop1INFaS2tjb54x//GFtssUXWUQAAILd++tOfxqBBg9rk2kkvVAYVpmfPnsnYsWNjwIABWUcBAIDcOeKII+L8889vs89nqYYKtPrqqydjxoyJ3r17Zx0FAAByY++9946bb745qqqq2uwVfpVqqFCbbrppcvfdd0fnzp2zjgIAAJnbfvvt46677ora2to2fcscx7+hgg0cODAZO3ZsdO/ePesoAACQmU033TTuv//+6Nq1a5u/B21VRHhvW6hg3/rWt5IHHnggevTokXUUAABod+uvv36MGzcu+vbtW5bia6mGDmDnnXdOJk6cGH379s06CgAAtJuvfvWrMXny5Fh99dXLtiQr1dBBbLPNNsn48eOjX79+WUcBAICy+9a3vhUTJ06M/v37l/Vothcqgw5kq622Sp566qnYeOONs44CAABlM2TIkBg7dmz07Nmz7Nc6u6YaOpj11lsvefLJJ2OvvfbKOgoAALS5H/zgBzFq1Kjo3LlzuxRdx7+hA+rdu3fywAMPxFlnnZV1FAAAaBN1dXVx1VVXxbXXXptUV1e323KsVEMHVV1dnYwYMSK58847o0uXLlnHAQCAFltrrbXisccei5NOOqndj2G7pho6uMMOOyx55plnYquttso6CgAANNu+++4bL7zwQmy77baZXNesVAOx6aabJk899VScddZZUV1dnXUcAABYqc6dO8dll10W9913X/Tp0yezFwpTqoGIiKirq0tGjBiRTJ48OdZff/2s4wAAwHLtuOOO8fzzz8dpp52WJBm/8rZSDSzhG9/4RvL888/H8OHDrdYAAORK796944YbbojHHnssNt5441y8jZUXKgM+p3v37sk111yTvPTSS956CwCAXNhnn33ipZdeiuOOOy7zdXpxlmpguTbeeONk7NixyahRo2KdddbJOg4AAB3QtttuG+PHj4/7778/WXPNNXNTppso1cBKHXTQQckrr7wSl1xySfTo0SPrOAAAdACbbbZZ3HvvvfHnP/85dt1119yV6SaOfwMl6dy5c3L22Wcnb731Vpx11llRV1eXdSQAACrQWmutFb/5zW/ixRdfjCFDhuTqqPeyVEVE5DwjkCOrrLJKMmLEiOTvf/97HHbYYf79AACgTeywww5x5513xuuvvx7HH398Ul1dXYgHmpZqoEXWWWed5M4770yeffbZ2G233bKOAwBAAa299toxfPjweOGFF2Ly5MnJYYcdltTW1haiTDdJ0jSNurq6dMGCBVlnyb3NNtssXnrppUL9B4b28sgjj6Rnn312PP/881lHAQAgh6qqqmKttdaKTTbZJHbdddcYNGhQbLTRRoXvV0p1MyjVsGKNjY3pyJEj47zzzos333wz6zgAALSjnj17xhe+8IVYddVVo1+/ftGvX78YMGBAbLTRRrHhhhvGhhtuGF26dKm4PqVUN4NSDaVZsGBBev3118f999//uR+bMWNGNDY2ttnv9dlnn8XChQvb7PPNnj072vLfw7lz58a8efPa7PMBALRE9+7do7a2NpIkid69e0dERF1dXXTt2jUiInr06BE1NTVRVVUVvXr1ii5dukTnzp2jT58+0blz5+jSpUv07t07OnfuHF27do2ePXtG586do3fv3tGvX79YddVVo1OnTh2yKyVpmkanTp3S+vr6rLPknlINZG3+/PnpnDlz2uzz1dfXx6xZs9rs8zU0NMTMmTPb7POlaRrTp09vs88XETF9+vQ2fS2RmTNnRkND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AABUvB133DEef/xxhRoKYKVLdURE165dkxEjRmSdFQAAOoSf//znWUcASlRSqY6IOPzww2OHHXbIOi8AAFS0ww47LHbaaScrNRRESce/mzz33HPpdtttF/X19VnnBgCAitO3b9949dVXo3///ko1FETJS3VExFe/+tXkvPPOyzozAABUpMsvv1yhhoJp1lIdEbFw4cJ0p512iqeeeirr7AAAUDF23nnnmDRpUiRJolRDgTS7VEdEvPHGG+nXvva1mDZtWtb5AQCg8Lp06RJ//etfY/3111eooWCadfy7ybrrrpuMHDkyqqurs84PAACF9/Of/1yhhoJqUamOiNhjjz2SX/ziF1nnBwCAQttvv/3i5JNPzjoG0EItOv69uGOOOSa9+eabs74dAABQOOutt148++yz0atXLys1FFSrS3V9fX06ZMiQGDNmTNa3BQAACqNz587x5JNPxlZbbaVQQ4G1+Ph3k9ra2mTUqFGxww47ZH1bAACgMK699lqFGipAq0t1RESXLl2S++67LzbaaKOsbw8AAOTe8OHD4+ijj1aooQK0+vj34t599910p512infeeSfr2wUAALk0dOjQ+Pc76SjVUAHatFRHRLzzzjvpzjvvrFgDAMBSdtlllxg7dmzU1dUp1FAh2rxUR0S8/vrr6c477xzvv/9+1rcPAABy4Stf+Uo8+uij0bt3b4UaKkhZSnVExEsvvZQOHDgwPv7446xvIwAAZGq99daLyZMnxxe+8AWFGipMm7xQ2bJsvvnmycMPPxyrrLJK1rcRAAAys9lmm8Wjjz6qUEOFKlupjojYeuutk8cffzxWX331rG8nAAC0u2233TYmTZoUa6yxhkINFaqspToiYuONN04mTpwYa665Zta3FQAA2s1uu+0WEyZMiH79+inUUMHKXqojIjbccMPk8ccfj3XWWSfr2wsAAGV3xBFHxJgxY6J79+4KNVS4dinVERFrr712MmnSpNhwww2zvs0AAFAWVVVVcd5558Vtt90WtbW1CjV0AGV79e/l+fTTT9N99903nnzyyaxvOwAAtJlVVlklbrvtthg0aJAyDR1Iu5fqiIjZs2enw4YNi7Fjx2Z9+wEAoNW23nrrGDVqVHz5y19WqKGDabfj34vr1q1bMnr06Pj2t7+d9e0HAIBW+cEPfhBPPvmkQg0dVCalOiKiU6dOya233ppceumlUV1dnfWfAwAANMtqq60Wo0aNimuvvTapq6tTqKGDyuT499Ieeuih9LDDDovp06dnHQUAAFZq2LBhcd1118Uqq6yiTEMHl4tSHRHxj3/8Iz3yyCPjmWeeyToKAAAs07rrrhs33HBDDBw4UJkGIiLD499L22CDDZInnngizjvvvKipqck6DgAALNKpU6c444wz4m9/+5tCDSwhN0v14p5++ul0+PDh8fzzz2cdBQCADqyqqioOPfTQuPjii2OdddZRpoHPyWWpjohI0zQdNWpUnH766fHuu+9mHQcAgA5mt912i0svvTS23nprZRpYrtyW6iazZs1Kr7/++rj66qvjvffeyzoOAAAVbtttt40RI0bELrvsokwDK5X7Ut2kvr4+HTlyZFx11VWOhQMA0Oa+/vWvx3nnnReDBw+OJEkUaqAkhSnVi/v73/+e3nrrrXHLLbfEBx98kHUcAAAKbLvttotzzjkn9tlnH2UaaLZCluomCxcuTMePHx/33HNP3HffffHhhx9mHQkAgILYaaed4mc/+1nsuuuuijTQYoUu1YtraGhIn3zyybj33nvj/vvvj//3//5f1pEAAMihgQMHxnnnnRff+ta3lGmg1SqmVC/ttddeS8eMGROTJk2Kxx9/PKZPn551JAAAMrTHHnvEeeedFzvuuKMyDbSZii3Vi2tsbExfeuml+Otf/xovv/xyvPTSS/H666/He++9F/Pnz886HgAAZTR48OA477zz4hvf+IYyDbS5DlGqV+SDDz5Ip0yZEv/85z/jww8/jE8++SQ+/fTTJf43e/bsmDZtWsydOzfmzZsX06ZNyzo2AAArkCRJ7LPPPnHeeefF1772NWUaKJsOX6pbau7cuWlTwU7TdInj5dOnT4+mP9fPPvssFi5cGBERs2fPjgULFjT9+pg3b15ERMyfPz/mzJkTERELFy6Mzz77LCIiGhsbY8aMGZ/7vRf/+cuzvF+7tJkzZ0ZDQ8PKbuuirC3V0NAQM2fObLM/f/Kpa9euUVdXl3WMzHXu3Dm6dOmSdYw21bNnz6iurs7s9+/Tp09mv3dNTU306NEjs98/679P3bt3j9ra2sx+/169ekVVVVUmv3dVVVX06tUrs9veqVOn6NatW2a/f9b/pvfo0SNqampa/Ot79+4d6667rjINlJ1SDf82bdq0Ft8ZunXrFp06dfKFGwAAOpj/D3bD2MFmKNgIAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA2LTEyVDAzOjM0OjQ3KzA4OjAwK+A2kgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNi0wNC0yNFQxODo0MzozNCswODowMLMmndQAAABUdEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL2hvbWUvZGIvc3ZnX2luZm8vc3ZnLzIyL2E3LzIyYTcxMDJjNzE3MzU2ZTEwMGFmMjRmNGQxNGQ0OWEyLnN2Z2NcRjoAAAAASUVORK5CYII='


const add_menu_dropdown = (menu) => {


let somethinghere = menu

let openchildMenu = menu.children

for (var i = 0; i < openchildMenu.length; i++) {
    var currentchildMenu = openchildMenu[i];
    var hrefval = currentchildMenu.childNodes[0].hash
    


   var ass =  '<a style="display: inline-block;  position: absolute; right: 0" href="' + hrefval + '" target="_blank"><img style="display: inline-block;" src="' + opennewtabImage + '" width="40"></a>'
   
   currentchildMenu.childNodes[0].classList.add('boomimenuOpen')
   currentchildMenu.childNodes[0].insertAdjacentHTML('afterend', ass);


  


  }




}