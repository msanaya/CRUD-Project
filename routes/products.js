import express from 'express';
import { v4 as uuidv4 } from 'uuid'; //generates unique id for products
const router = express.Router();


const products = [
  {
    "id": "1",
    "category": "Home",
    "name": "Kitchen Instrument",
    "price": "66",
    "subcategory": "Kitchen",
    "sentence": "Vivamus congue, metus in fringilla facilisis, ante orci posuere turpis, nec malesuada massa nisi dignissim mi",
    "paragraph": "Proin finibus risus ut dui vulputate malesuada. Maecenas aliquet egestas aliquet. Morbi dignissim ipsum orci, sit amet malesuada tortor venenatis tempor. Pellentesque molestie elementum nisl, at finibus nisi rutrum quis. Nam in est id purus laoreet tincidunt nec nec justo. Suspendisse porta, orci nec varius convallis, orci erat pellentesque libero, dictum venenatis tortor nunc eget neque. Fusce quis vulputate ante, non iaculis mauris. Phasellus sed est eros. Suspendisse sem justo, iaculis ut urna suscipit, cursus gravida libero. Donec vehicula porttitor nibh et posuere. Phasellus tempus justo a lectus vulputate, auctor accumsan libero interdum."
  },
  {
    "id": "2",    
"category": "Automotive",
    "name": "Car Mechanism",
    "price": "78.95",
    "subcategory": "Car",
    "sentence": "Proin vulputate pulvinar quam, aliquet iaculis eros pellentesque ac",
    "paragraph": "Integer ut tellus leo. Aenean vehicula sem ut tortor iaculis dignissim. Fusce lorem est, molestie ut dictum id, pretium vel odio. Integer imperdiet justo quis tortor pharetra, non tempor urna ornare. Vivamus consectetur sem non egestas consequat. Integer tempus dolor lorem, at auctor turpis maximus tristique. Fusce feugiat vel tortor eget vulputate. Proin vitae venenatis nibh, at tempus nibh. Pellentesque tristique lorem nec lectus tristique ultrices. Suspendisse a leo porta, bibendum justo ut, gravida ex. Suspendisse potenti. Phasellus tempus ipsum consequat dui sagittis gravida. Donec interdum, enim eu porttitor facilisis, nunc nunc viverra dui, vitae viverra ipsum felis ac neque. Aliquam dapibus et lectus id tincidunt. Cras a mauris sed quam feugiat mollis id eu lorem."
  },
  {
      "id": "3",   
 "category": "Pets",
    "name": "Cat Whatchamacallit",
    "price": "95",
    "subcategory": "Cat",
    "sentence": "In bibendum scelerisque lectus, sed vulputate diam gravida nec",
    "paragraph": "Sed volutpat facilisis turpis nec imperdiet. Vestibulum eu quam dapibus, suscipit massa eu, varius est. Maecenas mattis lacus ut tincidunt finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ultricies nisi sed rhoncus pretium. Nulla rutrum volutpat porta. Nunc mattis, felis nec lobortis consectetur, eros tortor placerat urna, at suscipit nisl diam non ante. Suspendisse id finibus orci, a vehicula nibh. Curabitur faucibus vehicula nisl eget auctor. Proin sed neque ac mi faucibus auctor aliquet id velit. Cras accumsan faucibus purus a consequat. Maecenas eu fringilla metus."
  },
  {
      "id": "4",    
"category": "Activity",
    "name": "Outdoors Kit",
    "price": "30.99",
    "subcategory": "Outdoors",
    "sentence": "Quisque mattis tortor quis mattis tempus",
    "paragraph": "Ut venenatis, tortor a commodo tincidunt, metus urna finibus lorem, ut pulvinar diam risus quis sapien. Nunc sit amet consectetur tortor. Suspendisse potenti. Nulla elementum hendrerit commodo. Sed suscipit et mi nec lobortis. Fusce efficitur metus ut orci ullamcorper suscipit. Sed condimentum sapien eu bibendum porta. Duis vel nunc quis leo congue interdum."
  },
  {
    "id": "5", 
    "category": "Entertainment",
    "name": "Book Instrument",
    "price": "86.99",
    "subcategory": "Book",
    "sentence": "Vivamus at augue scelerisque, bibendum est vel, aliquam ligula",
    "paragraph": "Phasellus eget fringilla justo. Integer sem mauris, viverra non ligula sagittis, consectetur pharetra tortor. Donec et varius leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra mollis ante, eget vestibulum turpis vestibulum vel. Donec dictum, tellus vitae fermentum egestas, erat leo tristique orci, ut aliquet lectus massa sed mauris. Integer viverra hendrerit nisl a vulputate. Pellentesque finibus auctor nisl, nec aliquet magna cursus ut."
  },
  {
        "id": "6",    
"category": "Pets",
    "name": "Cat Device",
    "price": "139",
    "subcategory": "Cat",
    "sentence": "Cras quam orci, tincidunt quis purus vel, molestie posuere urna",
    "paragraph": "Curabitur tristique vehicula vestibulum. Etiam blandit dictum ex, malesuada commodo lectus gravida ac. Morbi a augue quam. Aenean volutpat condimentum efficitur. Nunc ut purus vestibulum, tincidunt nunc in, congue ante. Sed consequat felis sed elementum semper. Curabitur tincidunt mollis lacus, sit amet tincidunt eros sodales sit amet. Maecenas condimentum eros eget vestibulum aliquam. Phasellus sapien lorem, mollis vel lectus vel, bibendum fermentum ligula. Morbi sollicitudin suscipit felis, a commodo justo fringilla id."
  },
  {
    "category": "Activity",
    "name": "Beach Component",
    "price": "192",
    "subcategory": "Beach",
    "sentence": "Nunc sit amet consectetur tortor",
    "paragraph": "Nulla facilisi. Aliquam imperdiet bibendum nisi vitae condimentum. Suspendisse eleifend nibh in enim ornare, id tempus orci dapibus. Proin sed scelerisque neque. Vestibulum blandit mi quis leo euismod faucibus. Vestibulum eget libero eget nibh sodales vehicula vitae ut est. Integer vel commodo massa, eget imperdiet sapien. Mauris auctor elementum nibh, ac vehicula leo pellentesque quis. Cras pulvinar ipsum vulputate, hendrerit quam ut, ullamcorper lectus."
  },
  {
    "category": "Clothing",
    "name": "Kids Gear",
    "price": "107",
    "subcategory": "Kids",
    "sentence": "Donec quis elit sit amet justo porttitor condimentum et nec urna",
    "paragraph": "Praesent nec commodo mauris, ut cursus odio. Donec venenatis tincidunt eros nec volutpat. Nulla convallis egestas finibus. Proin tellus nunc, cursus quis massa a, congue dictum massa. Phasellus tincidunt tristique placerat. Proin imperdiet feugiat consectetur. Nullam rhoncus ullamcorper libero quis viverra."
  },
  {
    "category": "Clothing",
    "name": "Womens Doodad",
    "price": "132.99",
    "subcategory": "Womens",
    "sentence": "Ut molestie mollis urna in lobortis",
    "paragraph": "Proin sodales sem vel leo facilisis euismod. Maecenas mollis metus metus, ut molestie orci interdum ac. Maecenas pharetra lorem quis erat dapibus pretium. In ullamcorper augue massa, tincidunt interdum mauris pulvinar non. Donec at diam in metus tincidunt tincidunt. Praesent mollis a lacus ornare fringilla. Nullam iaculis sed tellus fringilla pellentesque. Etiam at dolor eget dolor eleifend finibus quis sodales metus. Aliquam eleifend sed felis id pharetra. Integer ultrices odio in aliquet gravida. Morbi interdum placerat tortor et porttitor. In hac habitasse platea dictumst. Maecenas dignissim lobortis mi, in interdum ipsum varius eget. Curabitur quis risus a tortor sollicitudin fringilla id ac nibh."
  },
  {
    "category": "Home",
    "name": "Gardening Accessory",
    "price": "134",
    "subcategory": "Gardening",
    "sentence": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "paragraph": "Aenean id posuere urna. Phasellus vehicula est ex, elementum consequat dui ornare non. Suspendisse libero risus, vulputate vitae ultricies nec, placerat ac tortor. Donec tincidunt ornare metus. Nunc nunc dolor, egestas in odio in, mattis facilisis est. Sed ac ligula eget orci consectetur interdum. Fusce elit metus, consequat ut tortor sit amet, porttitor feugiat nisl. Donec tempus maximus purus et ultricies. Nunc pretium elit non felis placerat placerat. Suspendisse cursus diam nulla, eu pellentesque ipsum viverra at. Nulla sit amet maximus lorem."
  },
  {
    "category": "Activity",
    "name": "Sports Contraption",
    "price": "80.95",
    "subcategory": "Sports",
    "sentence": "Cras aliquam pharetra libero nec varius",
    "paragraph": "Praesent nec commodo mauris, ut cursus odio. Donec venenatis tincidunt eros nec volutpat. Nulla convallis egestas finibus. Proin tellus nunc, cursus quis massa a, congue dictum massa. Phasellus tincidunt tristique placerat. Proin imperdiet feugiat consectetur. Nullam rhoncus ullamcorper libero quis viverra."
  },
  {
    "category": "Home",
    "name": "Bedding Mechanism",
    "price": "108.95",
    "subcategory": "Bedding",
    "sentence": "Nullam id augue vitae nulla interdum pharetra ut et turpis",
    "paragraph": "Fusce interdum, ipsum in hendrerit convallis, orci sem ornare ante, nec tincidunt urna augue ac metus. Maecenas pharetra id dui eu semper. Suspendisse sodales tempor odio, quis luctus massa gravida ac. Integer aliquet faucibus pulvinar. Etiam dui nunc, sodales ultrices laoreet vel, varius vel purus. Phasellus suscipit, urna sed mollis rhoncus, lectus ipsum tempus nisl, et gravida ipsum purus quis nisi. Sed leo arcu, venenatis quis blandit eu, hendrerit ut arcu. Praesent nec consectetur ligula. Curabitur sodales mauris non mi auctor, eu feugiat massa vulputate."
  },
  {
    "category": "Automotive",
    "name": "Truck Mechanism",
    "price": "168.95",
    "subcategory": "Truck",
    "sentence": "Quisque vel felis libero",
    "paragraph": "Ut molestie mollis urna in lobortis. Pellentesque id massa arcu. Pellentesque gravida, quam quis consequat consequat, erat elit faucibus nulla, vel condimentum est nulla ac ligula. Praesent sed ligula dolor. Fusce elementum semper odio, sit amet imperdiet ipsum tincidunt id. Mauris et lectus in velit tristique lacinia. Phasellus rutrum lacus quis sagittis pharetra. Morbi malesuada tellus sed felis euismod, id fringilla arcu posuere. Nunc rutrum dapibus odio vel efficitur. Pellentesque quis dignissim est. Morbi aliquet dui id ex efficitur tincidunt. Maecenas varius diam sit amet eros volutpat, tempor efficitur urna ornare."
  },
  {
    "category": "Home",
    "name": "Kitchen Mechanism",
    "price": "122.99",
    "subcategory": "Kitchen",
    "sentence": "Curabitur ex nibh, ullamcorper ut sollicitudin eget, lacinia eget dolor.",
    "paragraph": "Nam lorem arcu, pretium quis lectus et, volutpat euismod enim. Suspendisse semper tortor sapien, eu cursus nisi fermentum non. Cras quam orci, tincidunt quis purus vel, molestie posuere urna. Etiam lobortis neque eget ex tempus, eu interdum mi semper. Cras felis enim, rutrum a imperdiet et, vehicula at metus. Praesent bibendum, augue eu aliquam gravida, lectus sapien fringilla ipsum, non tincidunt leo felis eu augue. Aliquam faucibus tortor enim, in convallis elit euismod quis."
  },
  {
    "category": "Health",
    "name": "First Aid Thingamajig",
    "price": "54.95",
    "subcategory": "First Aid",
    "sentence": "Nullam sit amet augue vitae orci tempus rhoncus.",
    "paragraph": "Praesent nec euismod ex. Cras pharetra auctor imperdiet. Maecenas nisi ipsum, tristique eu metus eu, tincidunt accumsan nibh. Aenean et purus faucibus, fermentum risus eget, posuere diam. Fusce eget orci non sapien gravida sagittis. Curabitur placerat condimentum tortor. Duis cursus feugiat sem, quis convallis mi lobortis vitae. Praesent in dui mi. Ut egestas consectetur massa, vitae vulputate diam feugiat vitae. Nam tincidunt dui massa, et lacinia arcu cursus a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris eu malesuada elit. Praesent accumsan venenatis leo eget tempor. Quisque luctus consequat faucibus."
  },
  {
    "category": "Beauty",
    "name": "Hair Care Accessory",
    "price": "119",
    "subcategory": "Hair Care",
    "sentence": "Ut molestie mollis urna in lobortis",
    "paragraph": "Nunc congue metus in nisi consequat, at elementum tellus laoreet. Ut sodales, mi non ullamcorper facilisis, tortor justo finibus ligula, a cursus arcu sapien vel purus. Vivamus tincidunt quam dapibus mi condimentum, vitae pharetra neque scelerisque. Mauris maximus a dolor vel pretium. Nulla nec gravida sapien. Nulla sodales mi eu neque porta facilisis. Nulla varius placerat auctor. Praesent quis nisl congue dui pretium tempor. Phasellus luctus nibh vestibulum, dignissim ligula vel, tristique libero. Aliquam porta egestas sapien, nec scelerisque felis semper vitae. Duis mauris leo, elementum at felis non, cursus maximus leo. Duis felis nulla, bibendum sit amet elementum vitae, vestibulum in justo. Mauris ipsum dui, tempor sit amet ligula vel, sollicitudin malesuada est. Morbi tristique mauris at arcu interdum ornare. Etiam non mi a sem pharetra varius."
  },
  {
    "category": "Home",
    "name": "Kitchen Whatchamacallit",
    "price": "117.95",
    "subcategory": "Kitchen",
    "sentence": "Vestibulum viverra non elit nec ornare",
    "paragraph": "Integer tempor metus convallis lorem dignissim, vel porttitor mauris varius. Vestibulum sagittis dolor nec sodales rutrum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam quis tortor vel ex egestas varius a et metus. Sed ultrices urna turpis, et tempus dolor dignissim et. Integer placerat quis nulla ac vestibulum. Sed at faucibus libero. Aenean hendrerit lorem euismod turpis consectetur cursus. Mauris venenatis odio sit amet enim imperdiet pulvinar. Phasellus dignissim risus vitae tellus elementum convallis. Pellentesque elementum est lectus, vel feugiat urna malesuada sit amet. Proin quis enim ac ipsum fermentum iaculis sed vel sapien. Maecenas quis libero eget nisl faucibus laoreet."
  },
  {
    "id": "123",
    "category": "Entertainment",
    "name": "Party Contraption",
    "price": "21.95",
    "subcategory": "Party",
    "sentence": "Etiam tristique ex sit amet justo tristique scelerisque",
    "paragraph": "Vivamus vel massa erat. Aliquam commodo mattis volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris nec orci ipsum. Ut at pharetra lectus. Fusce placerat fermentum elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi et placerat lectus, quis iaculis enim. Aenean sagittis sapien sed justo suscipit egestas. In iaculis in risus condimentum rhoncus. Nulla condimentum ligula ac egestas consequat. Pellentesque mauris lacus, euismod eget faucibus aliquet, hendrerit eget odio. Phasellus dictum vestibulum neque, eu laoreet tortor commodo nec."
  },
  {
    "category": "Entertainment",
    "name": "Music Apparatus",
    "price": "98.99",
    "subcategory": "Music",
    "sentence": "Nulla in diam ut magna semper varius.",
    "paragraph": "In at pharetra ligula, quis convallis nisl. Morbi enim ipsum, commodo non sem eget, pharetra porta nibh. Donec maximus, dui malesuada auctor suscipit, mauris felis bibendum dui, pellentesque tempor elit risus in odio. Fusce ante justo, pharetra non scelerisque id, interdum at enim. Fusce posuere at libero quis consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur eget risus ut velit vulputate rutrum nec eget metus. Sed nec fringilla massa. Aenean eget turpis quis lorem porta condimentum eu vel orci. Quisque mauris ex, venenatis sit amet commodo ac, semper non justo. Aenean vitae velit augue. Pellentesque rhoncus porta justo, eu consequat risus eleifend nec. Ut scelerisque scelerisque augue, at egestas dui vestibulum ac. Nullam gravida, leo a placerat bibendum, lacus nulla maximus magna, eu efficitur lorem felis ac lectus. Nulla eu justo lorem."
  },
  {
    "category": "Beauty",
    "name": "Hair Care Whatchamacallit",
    "price": "80.95",
    "subcategory": "Hair Care",
    "sentence": "Donec euismod tincidunt arcu, sit amet euismod purus placerat non",
    "paragraph": "Suspendisse placerat non erat quis aliquam. Maecenas pulvinar sollicitudin pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In gravida ligula in sapien blandit volutpat. Suspendisse porttitor dolor et neque condimentum, non consequat ligula commodo. Aenean ultricies nisl mauris, ac gravida dolor tempus et. Nullam et malesuada justo, ac scelerisque libero. Sed ultrices nunc enim. Integer posuere nulla egestas dignissim faucibus. Integer egestas augue quis sodales dictum."
  },
  {
    "category": "Health",
    "name": "Medicine Doodad",
    "price": "25.99",
    "subcategory": "Medicine",
    "sentence": "Morbi imperdiet dui vestibulum dolor tincidunt mattis ac ut diam",
    "paragraph": "In hendrerit dignissim ornare. Fusce et faucibus ipsum. Nullam luctus fringilla accumsan. Morbi in ullamcorper sapien. Morbi id mattis ex. Etiam et enim eros. Integer et metus in diam semper mollis eu quis eros. Phasellus a malesuada nisl."
  },
  {
    "category": "Automotive",
    "name": "Engine Attachment",
    "price": "80.95",
    "subcategory": "Engine",
    "sentence": "Sed vitae eleifend nibh",
    "paragraph": "Pellentesque dictum ante vitae tempor sodales. Phasellus sed egestas felis, id sagittis ipsum. Sed pharetra non urna quis luctus. Aenean iaculis iaculis augue, eget rutrum justo aliquet dapibus. Proin convallis vel tellus a bibendum. Duis sagittis ultrices orci vitae feugiat. Donec vehicula cursus diam at varius. Sed non varius nunc, at gravida est. Cras sodales varius metus ut dignissim. In hac habitasse platea dictumst. Aliquam diam quam, consequat et vestibulum vel, elementum nec elit. Nulla et viverra felis. In eget dolor non metus fermentum scelerisque."
  },
  {
    "category": "Health",
    "name": "Nutrition Doodad",
    "price": "81.95",
    "subcategory": "Nutrition",
    "sentence": "Nam a imperdiet augue",
    "paragraph": "Sed volutpat facilisis turpis nec imperdiet. Vestibulum eu quam dapibus, suscipit massa eu, varius est. Maecenas mattis lacus ut tincidunt finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ultricies nisi sed rhoncus pretium. Nulla rutrum volutpat porta. Nunc mattis, felis nec lobortis consectetur, eros tortor placerat urna, at suscipit nisl diam non ante. Suspendisse id finibus orci, a vehicula nibh. Curabitur faucibus vehicula nisl eget auctor. Proin sed neque ac mi faucibus auctor aliquet id velit. Cras accumsan faucibus purus a consequat. Maecenas eu fringilla metus."
  },
  {
    "category": "Pets",
    "name": "Dog Device",
    "price": "123",
    "subcategory": "Dog",
    "sentence": "Aenean varius nisi in ex mollis euismod.",
    "paragraph": "Curabitur tristique vehicula vestibulum. Etiam blandit dictum ex, malesuada commodo lectus gravida ac. Morbi a augue quam. Aenean volutpat condimentum efficitur. Nunc ut purus vestibulum, tincidunt nunc in, congue ante. Sed consequat felis sed elementum semper. Curabitur tincidunt mollis lacus, sit amet tincidunt eros sodales sit amet. Maecenas condimentum eros eget vestibulum aliquam. Phasellus sapien lorem, mollis vel lectus vel, bibendum fermentum ligula. Morbi sollicitudin suscipit felis, a commodo justo fringilla id."
  },
  {
    "category": "Activity",
    "name": "Camping Supplies",
    "price": "42.95",
    "subcategory": "Camping",
    "sentence": "Phasellus a augue lacus",
    "paragraph": "Suspendisse hendrerit ornare lorem ut pulvinar. Aenean dolor felis, venenatis sollicitudin dignissim eu, feugiat sed orci. Mauris suscipit purus sed volutpat dictum. Nam varius magna et dolor tristique pretium. Donec id est consequat, dictum dui sit amet, lobortis ipsum. Proin vulputate pulvinar quam, aliquet iaculis eros pellentesque ac. Donec placerat eu metus a interdum. Phasellus diam felis, vestibulum in ornare et, euismod et dolor. Etiam molestie sed ex et auctor. Nunc ligula mi, scelerisque vitae lobortis vitae, blandit a dolor. Vestibulum quam eros, semper nec sollicitudin et, rhoncus ac nulla. Sed sed suscipit eros, nec posuere nulla. Nulla id mi quis lorem malesuada gravida."
  },
  {
    "category": "Beauty",
    "name": "Hair Care Doodad",
    "price": "194.95",
    "subcategory": "Hair Care",
    "sentence": "Fusce et faucibus ipsum",
    "paragraph": "Curabitur fringilla lacus ac lacus dignissim condimentum mollis in est. Aliquam consectetur, nulla et accumsan eleifend, erat tellus cursus nulla, at faucibus libero lacus nec ante. Aliquam et ex at lorem ornare mollis. In hac habitasse platea dictumst. Aenean pretium viverra eros, at mattis libero. Proin vel dui et ex interdum dapibus. Etiam sit amet porta diam, at interdum enim. Vivamus in est et elit dignissim dignissim. Nam augue augue, pharetra non sagittis in, convallis vitae lectus. Curabitur vulputate massa nec elit feugiat volutpat. Integer accumsan rutrum risus vel dictum. Pellentesque ornare ipsum sed bibendum mollis. Cras enim elit, dignissim eget enim vel, sagittis rutrum purus. Nulla ut laoreet massa, pretium tincidunt quam."
  },
  {
    "category": "Beauty",
    "name": "Hair Care Paraphernalia",
    "price": "67",
    "subcategory": "Hair Care",
    "sentence": "Phasellus feugiat diam enim, nec molestie urna porta vitae",
    "paragraph": "Donec auctor id lorem et condimentum. Pellentesque convallis turpis in felis gravida sollicitudin. Suspendisse quam erat, euismod eget velit sed, elementum venenatis lacus. Nunc ac ligula urna. Fusce interdum vehicula libero ac blandit. Morbi libero sem, fringilla ac nunc non, cursus pulvinar erat. Pellentesque rutrum lectus eu massa tempor hendrerit. Nulla non odio eget orci rhoncus tempor id at enim."
  },
  {
    "category": "Activity",
    "name": "Biking Implement",
    "price": "146.99",
    "subcategory": "Biking",
    "sentence": "Cras est ipsum, molestie vel vulputate vulputate, iaculis ac tellus",
    "paragraph": "In hac habitasse platea dictumst. Donec a tincidunt dolor. Vestibulum sed felis et dui dignissim blandit. Integer ligula leo, blandit ut lorem tempus, eleifend convallis odio. Nam a eleifend tortor. Etiam tincidunt vestibulum feugiat. Quisque vel felis libero. Quisque sed nisi velit. Vestibulum venenatis pellentesque augue in dictum."
  },
  {
    "category": "Entertainment",
    "name": "Book Gear",
    "price": "64.99",
    "subcategory": "Book",
    "sentence": "Aliquam consectetur, nulla et accumsan eleifend, erat tellus cursus nulla, at faucibus libero lacus nec ante",
    "paragraph": "Vivamus eu lacus magna. Fusce sollicitudin maximus ante sed semper. Nulla facilisi. Suspendisse ultricies mi eget nisi vehicula, at aliquam nunc interdum. Nulla neque tellus, ultrices non consequat vitae, vehicula vulputate orci. Vivamus iaculis urna non enim maximus condimentum. Aliquam porttitor egestas viverra. Suspendisse elementum magna mauris, vitae vestibulum orci porttitor quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque vehicula efficitur libero. In bibendum scelerisque lectus, sed vulputate diam gravida nec. Nulla congue bibendum velit dictum pulvinar. Cras pharetra libero a tempor tincidunt. Mauris eget ullamcorper nibh."
  },
  {
    "category": "Beauty",
    "name": "Bath Gadget",
    "price": "116.99",
    "subcategory": "Bath",
    "sentence": "Integer accumsan, felis quis fringilla dignissim, nisl magna pulvinar lacus, nec aliquam mauris enim ut risus",
    "paragraph": "Cras suscipit erat sapien, id elementum erat porta eget. Donec sagittis auctor nisi, id bibendum neque ultrices eget. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur vitae nibh enim. Ut mollis ligula quis nisi venenatis, eget venenatis tellus ultricies. Fusce nec diam aliquet, faucibus erat in, accumsan arcu. Phasellus nec nulla eget leo pharetra aliquet ut id eros. Proin interdum, nibh tincidunt varius facilisis, libero ante maximus urna, nec pulvinar tortor elit in diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis sem placerat, dictum massa sit amet, rhoncus dolor. Etiam massa massa, blandit non vehicula sit amet, tincidunt sed lectus. Fusce pellentesque id eros eu pellentesque. Morbi eget rhoncus sem."
  },
  {
    "category": "Clothing",
    "name": "Jewelry Gadget",
    "price": "118",
    "subcategory": "Jewelry",
    "sentence": "Pellentesque dictum ante ac quam lobortis placerat",
    "paragraph": "Praesent nec euismod ex. Cras pharetra auctor imperdiet. Maecenas nisi ipsum, tristique eu metus eu, tincidunt accumsan nibh. Aenean et purus faucibus, fermentum risus eget, posuere diam. Fusce eget orci non sapien gravida sagittis. Curabitur placerat condimentum tortor. Duis cursus feugiat sem, quis convallis mi lobortis vitae. Praesent in dui mi. Ut egestas consectetur massa, vitae vulputate diam feugiat vitae. Nam tincidunt dui massa, et lacinia arcu cursus a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris eu malesuada elit. Praesent accumsan venenatis leo eget tempor. Quisque luctus consequat faucibus."
  },
];


router.get('/', (req, res) => {
    res.send(products);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const foundProduct = products.find((product) => product.id === id)
    res.send(foundProduct)
});

router.post('/', (req, res) => {
    const product = req.body;
    products.push({ ...product, id: uuidv4() });
    res.send(`${products.name} has been added to the Database`)
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  products = products.filter((product) => product.id !== id)
  res.send('${id} deleted successfully from database');
});

export default router