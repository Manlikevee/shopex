import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    header:{
        marginTop:29,
        padding: 20,
        display: 'flex',
 justifyContent: 'space-between',
 alignItems: 'center',
        gap: 10,
        flexDirection:'row',
        width: '100%'
    },
    mt:{
        marginTop:5,
        flexDirection: 'column',
        gap: 20,
        padding: 5,
        backgroundColor:'#FAFAFA',
       
    },
    mttwo:{
      marginTop:0,
      flexDirection: 'column',
      gap: 20,

      paddingTop:0,
      backgroundColor:'#FAFAFA',
     
  },

    mts:{
      flexDirection: 'column',
      gap: 17,
      padding: 5,
    },
    banner:{
        width: '100%',
        marginBottom: 20,
alignItems:'center'
    },
    flatlist:{
        marginTop: 20,

    },
    profilehead:{
      backgroundColor:'#0C1A30',
      padding: 10,
      flexDirection: 'column',
      gap: 4,
      alignItems:'center'
    }
    ,
    myinput:{
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 7,
        borderRadius: 4,
        fontSize: 14,
              },
              gridItem: {
                flex: 1,
                margin: 5,
                padding: 12,
                borderWidth: 1,
                gap: 4,
                borderColor: '#f2f2f2',
                borderRadius: 2,
                alignItems: 'start',
                justifyContent: 'center',
                backgroundColor: '#FFF',
                elevation: 0,
                shadowColor: '#ddd',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.1,
                shadowRadius: 1,
                elevation: 1, // Android shadow
              },
       
              gridItems: {
                flex: 1,
                margin: 5,
                padding: 12,
                borderWidth: 1,
                gap: 3,
                borderColor: '#f2f2f2',
                borderRadius: 2,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FFF',
                elevation: 0,
                shadowColor: '#ddd',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.1,
                shadowRadius: 1,
                elevation: 1, // Android shadow
              },
              sampleproductImage: {
                width: 60,
                height: 60,
                resizeMode: 'contain',
                marginBottom: 5,
              },

  productImage: {
    width: 130,
    height: 130,
    resizeMode: 'cover',
    marginBottom: 5,
    alignSelf: 'center',

  },

  alsotext:{
    marginTop: 10,
    fontSize: 16,
    color: '#313133',
    fontWeight:'700',
    fontFamily: 'poppins'
  },
  gridTextday: {
    fontSize: 13,
    color: '#313133',
    fontFamily: 'poppins'
  },
  productTitle: {
    fontSize: 12, 
    color: '#827d7d',
    fontFamily: 'poppins'
  },
  toptitle:{
    marginTop: 10,
    fontSize: 13, 
    color: '#fff',
    fontFamily: 'poppins'
  },
  shopexprofileflex:{
    padding:10,
    gap: 10,
    flexDirection: 'column',
    backgroundColor: '#fff',

  },
  gpt:{
gap: 10,
flexDirection:'row',
alignItems:'center'
  },
  jcs:{
    padding:7,
    alignItems:'center',
    justifyContent: 'space-between',
    flexDirection:'row',
    marginBottom: 6
  },
  profilephoto:{
    width: 100,
    height:  100,
backgroundColor:'#f2f2f2',
borderRadius:50,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop:20,
   
  },
  bottomtitle:{
    fontSize: 12, 
    color: '#f8991e',
    fontFamily: 'poppins',

  },

  tac:{
textAlign:'center',
color: '#033BAB',


  },
  productTitles: {
    fontSize: 13,
    color: '#0C1A30',
    lineHeight: 20,
    fontFamily: 'poppins'

  },
  cartbtn:{
    padding: 9,
    width: '100%',
    alignItems: 'center',
    backgroundColor:'#033BAB',
    borderRadius: 4,
    marginTop: 5
  },
  carttxt:{
    color: '#fff',
    fontSize: 12,
    fontFamily: 'poppins'
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  actions: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  actionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: -8,
    marginBottom: 12,
  },
  photos: {
    paddingTop: 6,
    paddingHorizontal: 20,
    marginTop: 12,
    position: 'relative',
    height: 270,
    overflow: 'hidden',
    borderRadius: 12,
  },
  photosImg: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    width: '100%',
    height: 270,

    objectFit: 'contain'
  },
  photosPagination: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: '#242329',
    borderRadius: 31,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  photosPaginationText: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 18,
    color: '#ffffff',
  },
  header: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderColor: '#fff',
    margin:20,
    borderWidth: 1,
    
  },
  headerTitle: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: '#242329',
    fontFamily: 'poppins',
    marginBottom: 4,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  headerLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLocationText: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 20,
    color: '#7b7c7e',
    marginLeft: 4,
  },
  headerPrice: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 30,
    textAlign: 'right',
    color: '#033BAB',
  },
  headerStars: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerStarsText: {
    marginLeft: 8,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 20,
    color: '#7b7c7e',
  },
  headerDistance: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 20,
    color: '#7b7c7e',
  },
  picker: {
    marginTop: 9,
    marginHorizontal: 5,

    paddingHorizontal: 20,
    height: 48,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e3e3e3',
    borderStyle: 'solid',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pickerDates: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickerDatesText: {
    marginLeft: 8,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 23,
    color: '#242329',
    fontFamily: 'poppins'
  },
  pickerFilter: {
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'poppins'
  },
  pickerFilterWrapper: {
    borderLeftWidth: 1,
    borderColor: '#e5e5e5',
    paddingLeft: 12,
  },
  pickerFilterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  pickerFilterItemText: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
    color: '#242329',
    marginLeft: 4,
    fontFamily: 'poppins'
  },
  stats: {
    marginVertical: 16,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statsItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statsItemText: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 18,
    color: '#242329',
    marginLeft: 7,
  },
  about: {
    padding: 5,
    marginHorizontal: 20,
    backgroundColor:'#fff'
  },
  aboutTitle: {
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 32,
    color: '#242329',
    marginBottom: 4,
  },
  aboutDescription: {
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 24,
    color: '#7b7c7e',
    fontFamily: 'poppins'


  },
  footer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 36,
    borderWidth: 1,
    backgroundColor: '#242329',
    borderColor: '#242329',
    height: 52,
  },
  btnSecondary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor:'#033BAB',
    backgroundColor:'#033BAB',
    height: 52,
  },
  btnSecondaryText: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: '700',
    color: '#fff',
  },
  btnText: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: '700',
    color: '#fff',
  },
  action: {
    width: 36,
    height: 36,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderStyle: 'solid',
    borderRadius: 12,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: 0,
  },
  tabsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 4,
  },
  tabsItemLine: {
    width: 20,
    height: 3,
    backgroundColor: '#f26463',
    borderRadius: 24,
  },
  tabsItemWrapper: {
    marginRight: 28,
  },
  tabsItemText: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    color: '#7b7c7e',
  },
})