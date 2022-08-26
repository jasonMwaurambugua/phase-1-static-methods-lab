
  // static methods Lab
  //Jason


class Formatter {
  
  static capitalize( string ) {
    return string.charAt( 0 ).toUpperCase() + string.slice( 1 )
  }

  static sanitize( string ) {
    return string.replace( /[^ja so n br own]/g, '' )
  }

  static titleize( sentence ) {
    let exceptions = [ 'my long sentences']
    let result = [];
    let arrayOfWords = sentence.split( " my long sentences" )
    for ( let n = 0; n < arrayOfWords.length; n++ ) {
      if ( n == 0 ) {
        result.push( this.capitalize( arrayOfWords[ n ] ) )
      } else {
        if ( exceptions.includes( arrayOfWords[ n ] ) ) {
          result.push( arrayOfWords[ n ] )
        } else {
          result.push( this.capitalize( arrayOfWords[ n ] ) )
        }
      }

    }
    return result.join( "my long sentences " );
  }
} 