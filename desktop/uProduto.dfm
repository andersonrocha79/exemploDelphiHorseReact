object Form1: TForm1
  Left = 0
  Top = 0
  Caption = 'Form1'
  ClientHeight = 407
  ClientWidth = 802
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  OldCreateOrder = False
  OnShow = FormShow
  DesignSize = (
    802
    407)
  PixelsPerInch = 96
  TextHeight = 13
  object DBGrid1: TDBGrid
    Left = 8
    Top = 8
    Width = 786
    Height = 391
    Anchors = [akLeft, akTop, akRight, akBottom]
    DataSource = DataSource1
    TabOrder = 0
    TitleFont.Charset = DEFAULT_CHARSET
    TitleFont.Color = clWindowText
    TitleFont.Height = -11
    TitleFont.Name = 'Tahoma'
    TitleFont.Style = []
    Columns = <
      item
        Expanded = False
        FieldName = 'GUUID'
        Width = 78
        Visible = True
      end
      item
        Expanded = False
        FieldName = 'CODIGO'
        Width = 58
        Visible = True
      end
      item
        Expanded = False
        FieldName = 'DESCRICAO'
        Width = 175
        Visible = True
      end
      item
        Alignment = taRightJustify
        Expanded = False
        FieldName = 'PRECO'
        Title.Alignment = taRightJustify
        Width = 69
        Visible = True
      end
      item
        Alignment = taCenter
        Expanded = False
        FieldName = 'NCM'
        Title.Alignment = taCenter
        Width = 72
        Visible = True
      end
      item
        Alignment = taRightJustify
        Expanded = False
        FieldName = 'ALIQUOTA'
        Title.Alignment = taRightJustify
        Width = 60
        Visible = True
      end
      item
        Alignment = taRightJustify
        Expanded = False
        FieldName = 'ST'
        Title.Alignment = taRightJustify
        Width = 50
        Visible = True
      end
      item
        Alignment = taCenter
        Expanded = False
        FieldName = 'STATUS'
        Title.Alignment = taCenter
        Width = 50
        Visible = True
      end
      item
        Alignment = taCenter
        Expanded = False
        FieldName = 'DATAALTERACAO'
        Title.Alignment = taCenter
        Width = 127
        Visible = True
      end>
  end
  object RESTClient1: TRESTClient
    Accept = 'application/json, text/plain; q=0.9, text/html;q=0.8,'
    AcceptCharset = 'utf-8, *;q=0.8'
    BaseURL = 'http://localhost:9000/produto'
    Params = <>
    RaiseExceptionOn500 = False
    Left = 136
    Top = 200
  end
  object RESTRequest1: TRESTRequest
    Client = RESTClient1
    Params = <>
    Response = RESTResponse1
    SynchronizedEvents = False
    Left = 136
    Top = 256
  end
  object RESTResponse1: TRESTResponse
    ContentType = 'application/json'
    Left = 136
    Top = 384
  end
  object RESTResponseDataSetAdapter1: TRESTResponseDataSetAdapter
    Active = True
    Dataset = FDMemTable1
    FieldDefs = <>
    Response = RESTResponse1
    Left = 136
    Top = 320
  end
  object FDMemTable1: TFDMemTable
    Active = True
    FieldDefs = <
      item
        Name = 'GUUID'
        DataType = ftWideString
        Size = 255
      end
      item
        Name = 'CODIGO'
        DataType = ftWideString
        Size = 255
      end
      item
        Name = 'DESCRICAO'
        DataType = ftWideString
        Size = 255
      end
      item
        Name = 'PRECO'
        DataType = ftWideString
        Size = 255
      end
      item
        Name = 'NCM'
        DataType = ftWideString
        Size = 255
      end
      item
        Name = 'ALIQUOTA'
        DataType = ftWideString
        Size = 255
      end
      item
        Name = 'ST'
        DataType = ftWideString
        Size = 255
      end
      item
        Name = 'STATUS'
        DataType = ftWideString
        Size = 255
      end
      item
        Name = 'DATAALTERACAO'
        DataType = ftWideString
        Size = 255
      end>
    IndexDefs = <>
    FetchOptions.AssignedValues = [evMode]
    FetchOptions.Mode = fmAll
    ResourceOptions.AssignedValues = [rvSilentMode]
    ResourceOptions.SilentMode = True
    UpdateOptions.AssignedValues = [uvCheckRequired]
    UpdateOptions.CheckRequired = False
    StoreDefs = True
    Left = 648
    Top = 216
  end
  object DataSource1: TDataSource
    DataSet = FDMemTable1
    Left = 648
    Top = 272
  end
end
